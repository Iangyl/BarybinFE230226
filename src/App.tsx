import React, { useEffect } from 'react';
import users from 'assets/initData.json';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setUsers } from 'redux/app/appSlice';
import UserList from 'components/UserList/UserList';

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUsers(users));
  });

  return (
    <section>
      <UserList data={data} />
    </section>
  );
}

export default App;
