import {
  createContext,
  useContext,
  useEffect,
  FC,
  useCallback,
  useRef,
} from 'react';

export type ScrollEffectCallback = (arg: { x: number; y: number }) => unknown;
interface ScrollEffectProps {
  addEffectFunction: (callBack: ScrollEffectCallback) => void;
  removeEffectFunction: (callBack: ScrollEffectCallback) => void;
}

export const useScrollEffect = () => useContext(useScrollEffect.context);
useScrollEffect.context = createContext<ScrollEffectProps>(undefined as any);

export const ScrollEffectProvier: FC = ({ children }) => {
  const effectFunctionsRef = useRef<Set<ScrollEffectCallback>>(new Set());

  const addEffectFunction = useCallback((effect: ScrollEffectCallback) => {
    effectFunctionsRef.current.add(effect);
  }, []);
  const removeEffectFunction = useCallback((effect: ScrollEffectCallback) => {
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
