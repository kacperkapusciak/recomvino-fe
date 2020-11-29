import { Dispatch } from 'react';
import { ILike, IPerson, IRecommendation } from '.';

export interface IUserContext {
  user: IPerson;
  setUser: Dispatch<IPerson>;
  likes: ILike[];
  logOut: () => void;
  refetchLikes: () => void;
  recommendations: IRecommendation[];
  recLoading: boolean;
}
