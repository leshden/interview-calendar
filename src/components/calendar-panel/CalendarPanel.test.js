import { render, screen } from '@testing-library/react';
import CalendarPanel from './CalendarPanel';
import {OffsetScrollProvider} from '../../contexts/OffsetScrollContext';

test('render CalendarPanel', () => {

  render(
    <OffsetScrollProvider>
      <CalendarPanel />
    </OffsetScrollProvider>
  );

  const sectionPanel = screen.getByRole('section');
  expect(sectionPanel).toBeInTheDocument();
});
