import React from 'react';
import Close from 'assets/Close';
import { useModal } from '../ModalProvider';

import styles from './Modal.module.sass';

const CloseContainer = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.closeContainer}>
    <button className={styles.closeBtn} onClick={onClick}>
      <Close width={24} height={24} />
    </button>
  </div>
);

const Modal = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  const { closeModalWindow } = useModal();

  return (
    <div className={styles.modal}>
      <CloseContainer onClick={closeModalWindow} />
      {children}
    </div>
  );
};

export default Modal;
