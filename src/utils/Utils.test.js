import {GetSymbolTextOfDay, GetArrayDays} from './Utils';

test('GetSymbolTextOfDay', () => {
  expect(GetSymbolTextOfDay(1)).toBe('M');
});

test('GetArrayDays', () => {
  const cur = new Date();
  expect(GetArrayDays()[4].getDate()).toBe(cur.getDate());
  expect(GetArrayDays(10)[5].getDate()).toBe(cur.getDate());
});
