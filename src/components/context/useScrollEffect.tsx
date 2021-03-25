import {
  createContext,
  useContext,
  useEffect,
  FC,
  useCallback,
  useRef,
} from 'react';

export type ScrollEffectCallback = (arg: { x: number; y: number }) => unknown;
interface ScrollEffectContext {
  addEffectFunction: (callBack: ScrollEffectCallback) => void;
  removeEffectFunction: (callBack: ScrollEffectCallback) => void;
}

export const useScrollEffect = () => useContext(useScrollEffect.context);
useScrollEffect.context = createContext<ScrollEffectContext>(undefined as any);

export const ScrollEffectProvier: FC = ({ children }) => {
  const effectFunctionsRef = useRef<Set<ScrollEffectCallback>>(new Set());
  const scrollXRef = useRef(0);
  const scrollYRef = useRef(0);

  const addEffectFunction = useCallback((effect: ScrollEffectCallback) => {
    effectFunctionsRef.current.add(effect);
  }, []);
  const removeEffectFunction = useCallback((effect: ScrollEffectCallback) => {
    effectFunctionsRef.current.delete(effect);
  }, []);

  useEffect(() => {
    const onScrollEvent = () => {
      scrollXRef.current = window.pageXOffset;
      scrollYRef.current = window.pageYOffset;
    };

    window.addEventListener('scroll', onScrollEvent);

    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  useEffect(() => {
    const animation = () => {
      effectFunctionsRef.current.forEach((effectFunction) => {
        effectFunction({ x: scrollXRef.current, y: scrollYRef.current });
      });
      animationHandle = requestAnimationFrame(animation);
    };
    let animationHandle = requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(animationHandle);
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
