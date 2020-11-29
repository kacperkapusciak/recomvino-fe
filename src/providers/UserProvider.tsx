import React, { createContext, Dispatch, ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import { getLikes, getRecommendations } from '../api';

import { ILike, IPerson, IRecommendation, IUserContext } from '../types';

export const UserContext = createContext<IUserContext>({
  user: { id: '', name: '' },
  setUser: () => {},
  likes: [],
  logOut: () => {},
  refetchLikes: () => {},
  recommendations: [],
  recLoading: false,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): ReactElement => {
  const [user, setUser] = useState<IPerson>({
    id: '',
    name: '',
  });
  const [likes, setLikes] = useState<ILike[]>([]);
  const [recommendations, setRecommendations] = useState<IRecommendation[]>([]);
  const [recLoading, setRecLoading] = useState(false);

  useEffect(() => {
    fetchLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user.id) {
      fetchRecommendations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, likes]);

  const fetchLikes = async () => {
    try {
      if (user.id) {
        const { data } = await getLikes({ personId: user.id });
        setLikes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecommendations = async () => {
    setRecLoading(true);
    try {
      const { data } = await getRecommendations({ personId: user.id });
      setRecommendations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setRecLoading(false);
    }
  };

  const logOut = () => {
    setUser({
      id: '',
      name: '',
    });
    setLikes([]);
    setRecommendations([]);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, likes, logOut, refetchLikes: fetchLikes, recommendations, recLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContext {
  return useContext(UserContext);
}
