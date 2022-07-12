//@flow
export const GetSymbolTextOfDay = (index: number): string => {
    const dayText = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return dayText[index];
}

export const GetArrayDays = (size: number = 9): Array<Date> => {
  const arr = [...Array(size)].map(x => new Date());
  let value = -Math.floor(size/2);

  for (let i = 0; i < arr.length; ++i) {
    arr[i].setDate(arr[i].getDate() + value);
    value++;
  }

  return arr;
}
