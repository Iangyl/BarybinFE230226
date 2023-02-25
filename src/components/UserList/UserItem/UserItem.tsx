import React from 'react';
import { IUser } from 'lib/userInterface';
import { useAppDispatch } from 'redux/hooks';
import Button from 'components/Button/Button';
import { setCurrentUser } from 'redux/app/appSlice';
import UserCard from 'components/UserCard/UserCard';
import { useModal } from 'components/ModalProvider/ModalProvider';

import icon from 'assets/sticker1.png';
import styles from './UserItem.module.sass';

const UserItem = (props: IUser) => {
  const { name, nickname, photo } = props;
  const dispatch = useAppDispatch();
  const { invokeModalWindow } = useModal();

  const handleClick = () => {
    dispatch(setCurrentUser(props));
    invokeModalWindow(<UserCard />);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.image} src={icon ?? photo} alt="user_icon" />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.nickname}>{nickname}</p>
        </div>
      </div>
      <div className={styles.right}>
        <Button variant="secondary" onClick={handleClick}>
          View
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
