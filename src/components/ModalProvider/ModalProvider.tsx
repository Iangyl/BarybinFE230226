import React, { useContext, createContext, useState } from 'react';
import { IModalContext } from './ModalProvider.types';
import ModalSpace from './ModalSpace/ModalSpace';

const ModalContext = createContext<IModalContext | null>(null);

const error = <div>Something went wrong!</div>;

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [element, setElement] = useState<JSX.Element | JSX.Element[]>(error);

  const closeModalWindow = () => setIsOpen(false);
  const invokeModalWindow = (element: JSX.Element | JSX.Element[]) => {
    setElement(element);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ closeModalWindow, invokeModalWindow }}>
      {isOpen && <ModalSpace element={element} />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext)!;

export default ModalProvider;
