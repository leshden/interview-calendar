import {createContext, useState, useRef} from 'react';

const OffsetScrollContext = createContext();

export const OffsetScrollProvider = ({children}) => {
  const [offset, setOffset] = useState(0);

  const refToDays = useRef(null);
  const refToTable = useRef(null);

  const value = {offset, setOffset, refToDays, refToTable};
  return(
    <OffsetScrollContext.Provider value={value}>{children}</OffsetScrollContext.Provider>
  );
}

export default OffsetScrollContext;
