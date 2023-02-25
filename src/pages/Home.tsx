import React from 'react';
import UserList from 'components/UserList/UserList';
import { useAppSelector } from 'redux/hooks';

const Home = () => {
  const data = useAppSelector((state) => state.users);
  return (
    <section>
      <UserList data={data} />
    </section>
  );
};

export default Home;
