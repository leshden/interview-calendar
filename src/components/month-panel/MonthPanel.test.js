import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MonthPanel from './MonthPanel';

test('render MonthPanel', () => {
  render(<MonthPanel />);
  const buttonElement = screen.getAllByRole('button');

  for (let i = 0; i < buttonElement.length; ++i) {
    expect(buttonElement[i]).toBeInTheDocument();
  }
});

test('cur Date on MonthPanel', () => {
  render(<MonthPanel />);

  const cur = new Date();
  const monthYearStr = cur.toLocaleString('en-US', { year: 'numeric', month: 'long'});

  const textElement = screen.getByText(monthYearStr);
  expect(textElement).toBeInTheDocument();
});

test('next and prev month on MonthPanel', () => {
  render(<MonthPanel />);
  const buttonElement = screen.getAllByRole('button');

  for (let i = 0; i < buttonElement.length; ++i) {
    expect(buttonElement[i]).toBeInTheDocument();
  }

  const cur = new Date();
  const next = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);

  const curMonthYearStr = cur.toLocaleString('en-US', { year: 'numeric', month: 'long'});
  const nextMonthYearStr = next.toLocaleString('en-US', { year: 'numeric', month: 'long'});

  userEvent.click(buttonElement[1]);

  let textElement = screen.getByText(nextMonthYearStr);
  expect(textElement).toBeInTheDocument();

  userEvent.click(buttonElement[0]);

  textElement = screen.getByText(curMonthYearStr);
  expect(textElement).toBeInTheDocument();

});
