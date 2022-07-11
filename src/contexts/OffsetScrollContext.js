import {createContext, useState, useRef} from 'react';

const OffsetScrollContext = createContext();

export const OffsetScrollProvider = ({children}) => {

  const refToDays = useRef(null);
  const refToTable = useRef(null);

  const value = {refToDays, refToTable};
  return(
    <OffsetScrollContext.Provider value={value}>{children}</OffsetScrollContext.Provider>
  );
}

export default OffsetScrollContext;
