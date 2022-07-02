import { render, screen } from '@testing-library/react';
import CalendarPanel from './CalendarPanel';

test('render CalendarPanel', () => {
  render(<CalendarPanel />);
  const sectionPanel = screen.getByRole('section');
  expect(sectionPanel).toBeInTheDocument();
});
