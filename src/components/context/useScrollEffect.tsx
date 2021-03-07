import { createContext, useContext, useEffect, useState, FC } from 'react';

interface ScrollEffectProps {
  scrollY: number;
}

export const useScrollEffect = () => useContext(useScrollEffect.context);
useScrollEffect.context = createContext<ScrollEffectProps>(undefined as any);

export const ScrollEffectProvier: FC = ({ children }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const scrollEvent = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <useScrollEffect.context.Provider value={{ scrollY }}>
      {children}
    </useScrollEffect.context.Provider>
  );
};
