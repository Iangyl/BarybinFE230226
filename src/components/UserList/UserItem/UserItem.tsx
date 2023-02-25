import React from 'react';
import Button from 'components/Button/Button';
import icon from 'assets/sticker1.png';

import styles from './UserItem.module.sass';

const UserItem = ({
  name,
  nickname,
  photo,
}: {
  name: string;
  nickname: string;
  photo: string;
}) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <img className={styles.image} src={icon ?? photo} alt="user_icon" />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.nickname}>{nickname}</p>
      </div>
    </div>
    <div className={styles.right}>
      <Button variant="secondary">View</Button>
    </div>
  </div>
);

export default UserItem;
