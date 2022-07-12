import {createContext, useState, useRef} from 'react';

const OffsetScrollContext = createContext();

export const OffsetScrollProvider = ({children}) => {

  const refToDays = useRef(null);
  const refToTable = useRef(null);
  const [isDayScroll, setDayScroll] = useState(false)

  const value = {refToDays, refToTable, isDayScroll, setDayScroll};
  return(
    <OffsetScrollContext.Provider value={value}>{children}</OffsetScrollContext.Provider>
  );
}

export default OffsetScrollContext;
