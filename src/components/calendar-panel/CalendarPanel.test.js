import { render, screen } from '@testing-library/react';
import CalendarPanel from './CalendarPanel';
import OffsetScrollContext from '../../contexts/OffsetScrollContext';

test('render CalendarPanel', () => {
  render(
    <OffsetScrollContext.Provider value={0}>
      <CalendarPanel />
    </OffsetScrollContext.Provider>
  );
  const sectionPanel = screen.getByRole('section');
  expect(sectionPanel).toBeInTheDocument();
});
