import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';

test('renders a button correctly', () => {
  const { container } = render(<Button variant="secondary">View</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
