import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render Header', () => {
  render(<Header />);
  const textElement = screen.getByText(/calendar/i);
  expect(textElement).toBeInTheDocument();
});
