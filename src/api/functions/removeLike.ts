import { AxiosResponse } from 'axios';
import axios from '../instance';
import { ILikeDto, IPerson } from '../../types';

export const removeLike = ({ personId, wineId }: ILikeDto): Promise<AxiosResponse<IPerson>> => {
  return axios.delete<IPerson>(`likes/`, { data: { personId, wineId } });
};
