import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { projectConfig } from 'src/projectConfig';
import { ScrollEffectCallback, useScrollEffect } from './useScrollEffect';

interface ContentsVisibleContext {
  contentsVisible: boolean;
  handleVisibleTransitionEnd: () => void;
}

export const useContentsVisible = () => useContext(useContentsVisible.context);
useContentsVisible.context = createContext<ContentsVisibleContext>(
  undefined as any,
);

export const ContentsVisibleProvider: React.FC = ({ children }) => {
  const [contentsVisible, setContentsVisible] = useState(false);
  const [whileTransition, setWhileTransition] = useState(false);
  const scrollEffect = useScrollEffect();

  const handleVisibleTransitionEnd = useCallback(() => {
    if (contentsVisible) {
      document.body.style.overflow = 'auto';
    }
    setWhileTransition(false);
  }, [contentsVisible]);

  useEffect(() => {
    if (window.innerWidth >= projectConfig.pcBreakpoint) {
      document.body.style.overflow = 'hidden';
    } else {
      setContentsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!whileTransition && contentsVisible) {
      document.body.style.overflow = 'auto';
    }
  }, [contentsVisible, whileTransition]);

  useEffect(() => {
    const scrollEffectCallback: ScrollEffectCallback = ({ y }) => {
      if (y !== 0 && !contentsVisible) {
        setWhileTransition(true);
        setContentsVisible(true);
      }
    };
    scrollEffect.addEffectFunction(scrollEffectCallback);

    return () => {
      scrollEffect.removeEffectFunction(scrollEffectCallback);
    };
  }, [contentsVisible, scrollEffect]);

  useEffect(() => {
    const wheelEvent = () => {
      if (!contentsVisible) {
        setWhileTransition(true);
        setContentsVisible(true);
      }
    };
    window.addEventListener('wheel', wheelEvent);

    return () => {
      window.removeEventListener('wheel', wheelEvent);
    };
  }, [contentsVisible]);

  return (
    <useContentsVisible.context.Provider
      value={{ contentsVisible, handleVisibleTransitionEnd }}
    >
      {children}
    </useContentsVisible.context.Provider>
  );
};
