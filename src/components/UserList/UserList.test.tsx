import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';
import { Provider } from 'react-redux';
import { useModal } from 'components/ModalProvider/ModalProvider';
import { createStore } from '@reduxjs/toolkit';
import appReducer from 'redux/app/appSlice';
import { IModalContext } from 'components/ModalProvider/ModalProvider.types';

jest.mock('components/ModalProvider/ModalProvider');
const mockedHook = useModal as jest.Mock<IModalContext>;

test('renders the list items', () => {
  const items = [
    {
      phone: '902-738-3242',
      name: 'Geordan Aaryn',
      nickname: '@geordanaaryn',
      email: 'geordan.aaryn@fallinhay.com',
      position: 'Chief Executive Officer',
      photo: '1.jpg',
    },
    {
      phone: '902-782-3286',
      name: 'Brazil Izair',
      nickname: '@brazilizair',
      email: 'brazil.izair@fallinhay.com',
      position: 'Managing Director',
      photo: '2.jpg',
    },
  ];

  const store = createStore(appReducer, { users: items, currentUser: null });
  mockedHook.mockReturnValue({
    closeModalWindow: () => console.log('close'),
    invokeModalWindow: () => console.log('open'),
  });

  const { getByText } = render(
    <Provider store={store}>
      <UserList data={items} />
    </Provider>
  );

  items.forEach((item) => {
    const listItemElement = getByText(item.name);
    expect(listItemElement).toBeInTheDocument();
  });
});
