import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import User from 'assets/User';
import users from 'assets/initData.json';
import { useAppDispatch } from 'redux/hooks';
import { setUsers } from 'redux/app/appSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers(users));
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
