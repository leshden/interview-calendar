import { render, screen } from '@testing-library/react';
import MonthPanel from './MonthPanel';

test('render MonthPanel', () => {
  render(<MonthPanel />);
  const buttonElement = screen.getAllByRole('button');

  for (let i = 0; i < buttonElement.length; ++i) {
    expect(buttonElement[0]).toBeInTheDocument();
  }
});
