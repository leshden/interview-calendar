//@flow
export const GetSymbolTextOfDay = (index: number): string => {
    const dayText = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return dayText[index];
}
