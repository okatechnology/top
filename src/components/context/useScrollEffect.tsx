import {
  createContext,
  useContext,
  useEffect,
  FC,
  useCallback,
  useRef,
} from 'react';

type EffectFunction = (arg: { x: number; y: number }) => unknown;
interface ScrollEffectProps {
  addEffectFunction: (callBack: EffectFunction) => void;
  removeEffectFunction: (callBack: EffectFunction) => void;
}

export const useScrollEffect = () => useContext(useScrollEffect.context);
useScrollEffect.context = createContext<ScrollEffectProps>(undefined as any);

export const ScrollEffectProvier: FC = ({ children }) => {
  const effectFunctionsRef = useRef<Set<EffectFunction>>(new Set());

  const addEffectFunction = useCallback((effect: EffectFunction) => {
    effectFunctionsRef.current.add(effect);
  }, []);
  const removeEffectFunction = useCallback((effect: EffectFunction) => {
    effectFunctionsRef.current.delete(effect);
  }, []);

  useEffect(() => {
    const onScrollEvent = () => {
      effectFunctionsRef.current.forEach((effectFunction) => {
        effectFunction({ x: window.pageXOffset, y: window.pageYOffset });
      });
    };

    window.addEventListener('scroll', onScrollEvent);

    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  return (
    <useScrollEffect.context.Provider
      value={{ addEffectFunction, removeEffectFunction }}
    >
      {children}
    </useScrollEffect.context.Provider>
  );
};
