import {render, screen} from '@testing-library/react';
import TodoTableHours from './TodoTableHours';

test('render TodoTableHours', () => {
  const hours = Array.from(Array(24).keys());
  render(<TodoTableHours offset={0} hours = {hours}/>);
  const arrHoursCells = screen.getAllByText(/:00/i);
  expect(arrHoursCells[0]).toBeInTheDocument();
});
