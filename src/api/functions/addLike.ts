import { AxiosResponse } from 'axios';
import axios from '../instance';
import { ILikeDto, IPerson } from '../../types';

export const addLike = ({ personId, wineId }: ILikeDto): Promise<AxiosResponse<IPerson>> => {
  return axios.post<IPerson>(`likes/`, { personId, wineId });
};
