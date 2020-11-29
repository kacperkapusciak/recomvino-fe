import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from 'react';
import { getLikes } from '../api';

import { ILike, IPerson } from '../types';

interface IContext {
  user: IPerson;
  setUser: Dispatch<IPerson>;
  likes: ILike[];
  logOut: () => void;
  refetchLikes: () => void;
}

export const UserContext = createContext<IContext>({
  user: { id: '', name: '' },
  setUser: () => {},
  likes: [],
  logOut: () => {},
  refetchLikes: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): React.ReactElement => {
  const [user, setUser] = useState<IPerson>({
    id: '',
    name: '',
  });
  const [likes, setLikes] = useState<ILike[]>([]);

  useEffect(() => {
    fetchLikes();
  }, [user]);

  const fetchLikes = async () => {
    try {
      if (user.id) {
        console.log('refetching...');
        const { data } = await getLikes({ personId: user.id });
        setLikes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser({
      id: '',
      name: '',
    });
    setLikes([]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, likes, logOut, refetchLikes: fetchLikes }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IContext {
  return useContext(UserContext);
}
