import { createContext, useContext, useState } from 'react';

interface WorkModalContext {
  workModal: number | undefined;
  setWorkModal: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const useWorkModal = () => useContext(useWorkModal.context);
useWorkModal.context = createContext<WorkModalContext>(undefined as any);

export const WorkModalProvider: React.FC = ({ children }) => {
  const [workModal, setWorkModal] = useState<number>();

  return (
    <useWorkModal.context.Provider value={{ workModal, setWorkModal }}>
      {children}
    </useWorkModal.context.Provider>
  );
};
