import React, { useEffect, useMemo, useState } from 'react';
import Button from 'components/Button/Button';
import { IUser } from 'lib/userInterface';
import UserItem from './UserItem/UserItem';

import styles from './UserList.module.sass';

const UserList = ({ data }: { data: IUser[] }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);

  const dataToShow = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(0, endIndex);
  }, [currentPage, data]);

  const handleClick = () => setCurrentPage(1 + currentPage);

  useEffect(() => {
    if (data.length === dataToShow.length && data.length !== 0) {
      setIsHidden(true);
    }
  }, [dataToShow]);

  return (
    <ul className={styles.list}>
      {dataToShow &&
        dataToShow.map((item) => (
          <li key={item.phone}>
            <UserItem {...item} />
          </li>
        ))}
      <div className={styles.buttonContainer}>
        {!isHidden && (
          <Button variant="secondary" onClick={handleClick}>
            View all
          </Button>
        )}
      </div>
    </ul>
  );
};

export default UserList;
