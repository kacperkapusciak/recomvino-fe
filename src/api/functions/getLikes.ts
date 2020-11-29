import { AxiosResponse } from 'axios';
import axios from '../instance';
import { ILike } from '../../types';

interface IGetLikesParams {
  personId: string;
}

export const getLikes = ({ personId }: IGetLikesParams): Promise<AxiosResponse<ILike[]>> => {
  return axios.get<ILike[]>(`likes/${personId}`);
};
