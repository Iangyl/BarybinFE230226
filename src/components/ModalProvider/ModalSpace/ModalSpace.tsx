import React from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

import styles from './ModalSpace.module.sass';

const ModalSpace = ({ element }: { element: JSX.Element | JSX.Element[] }) => {
  return createPortal(
    <div className={styles.modalSpace}>
      <Modal>{element}</Modal>
    </div>,
    document.body
  );
};

export default ModalSpace;
