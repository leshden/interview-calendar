import {createContext, useState, useRef} from 'react';

const OffsetScrollContext = createContext();

export const OffsetScrollProvider = ({children}) => {

  const refToDays = useRef(null);
  const refToTable = useRef(null);
  const [isDayScroll, setDayScroll] = useState(false);
  const [data, setData] = useState([]);

  const value = {refToDays, refToTable, isDayScroll, setDayScroll, data, setData};
  return(
    <OffsetScrollContext.Provider value={value}>{children}</OffsetScrollContext.Provider>
  );
}

export default OffsetScrollContext;
