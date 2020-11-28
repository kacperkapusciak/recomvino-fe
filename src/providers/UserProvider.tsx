import React, { createContext, Dispatch, ReactNode, useContext, useState } from 'react';

import { IPerson } from '../types';

interface IContext {
  user: IPerson;
  setUser: Dispatch<IPerson>;
}

export const UserContext = createContext<IContext>({
  user: { id: '', name: '' },
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): React.ReactElement => {
  const [user, setUser] = useState<IPerson>({
    id: '',
    name: '',
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export function useUser(): IContext {
  return useContext(UserContext);
}
