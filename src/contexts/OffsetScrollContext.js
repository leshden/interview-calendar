import {createContext, useState} from 'react';

const OffsetScrollContext = createContext();

export const OffsetScrollProvider = ({children}) => {
  const [offset, setOffset] = useState(0);

  const value = {offset, setOffset};
  return(
    <OffsetScrollContext.Provider value={value}>{children}</OffsetScrollContext.Provider>
  );
}

export default OffsetScrollContext;
