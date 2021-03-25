import { createContext, useContext, useState } from 'react';

interface SpMenuModalContext {
  isSpMenuModalOpen: boolean;
  setIsSpMenuModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSpMenuModal = () => useContext(useSpMenuModal.context);
useSpMenuModal.context = createContext<SpMenuModalContext>(undefined as any);

export const SpMenuModalProvider: React.FC = ({ children }) => {
  const [isSpMenuModalOpen, setIsSpMenuModalOpen] = useState(false);

  return (
    <useSpMenuModal.context.Provider
      value={{
        isSpMenuModalOpen,
        setIsSpMenuModalOpen,
      }}
    >
      {children}
    </useSpMenuModal.context.Provider>
  );
};
