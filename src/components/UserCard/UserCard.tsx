import React from 'react';
import Button from 'components/Button/Button';
import { useAppSelector } from 'redux/hooks';
import icon from 'assets/sticker1.png';

import styles from './UserCard.module.sass';

const UserCard = () => {
  const { name, nickname, phone, position, email } = useAppSelector(
    (state) => state.currentUser
  )!;

  return (
    <div className={styles.userCard}>
      <div className={styles.top}>
        <img className={styles.avatar} src={icon} alt="user_icon" />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.nickname}>{nickname}</p>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.row}>
          <p className={styles.cellLeft}>Phone</p>
          <p>{phone}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.cellLeft}>Position</p>
          <p>{position}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.cellLeft}>Email</p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button variant="primary">Send message</Button>
      </div>
    </div>
  );
};

export default UserCard;
