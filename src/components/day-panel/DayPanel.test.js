import { render, screen } from '@testing-library/react';
import DayPanel from './DayPanel';

test('render DayPanel', () => {
  const num = 2;
  const txt = 'M';
  const selected = true;

  render(<DayPanel txt={txt} num={num} selected={selected} />);

  const dayPanelNumber = screen.getByText(num);
  expect(dayPanelNumber).toBeInTheDocument();

  const dayPanelText = screen.getByText(txt);
  expect(dayPanelText).toBeInTheDocument();
});
