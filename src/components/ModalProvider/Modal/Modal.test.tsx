import React from 'react';
import Modal from './Modal';
import { useModal } from '../ModalProvider';
import { render } from '@testing-library/react';
import { IModalContext } from '../ModalProvider.types';

jest.mock('../ModalProvider');
const mockedHook = useModal as jest.Mock<IModalContext>;

test('renders a modal correctly', () => {
  mockedHook.mockReturnValue({
    closeModalWindow: () => console.log('close'),
    invokeModalWindow: () => console.log('open'),
  });
  const { container } = render(<Modal>View</Modal>);
  expect(container.firstChild).toMatchSnapshot();
});
