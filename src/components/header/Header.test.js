import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Header from './Header';

test('render Header', () => {
  render(<Header />);
  const textElement = screen.getByText(/calendar/i);
  expect(textElement).toBeInTheDocument();
});

test('click AddEvent ', () => {
  render(<Header />);
  const addButton = screen.getByRole('button');
  userEvent.click(addButton);
  expect(addButton).toBeInTheDocument();
});
