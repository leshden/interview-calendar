import { render, screen } from '@testing-library/react';
import TodoTableCell from './TodoTableCell';

test('render TodoTableCell', () => {
  render(<TodoTableCell item={'Task-test'}/>);
  const tableCell = screen.getByText(/task/i);
  expect(tableCell).toBeInTheDocument();
});
