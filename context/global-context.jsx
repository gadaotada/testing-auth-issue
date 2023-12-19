'use client';
import { createContext, useState } from 'react';

export const UserContext = createContext(false);

export const UserStatus = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};
