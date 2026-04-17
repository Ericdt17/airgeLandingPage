import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
