import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IPerson } from '../../types';

interface IGetPersonParams {
  personId: string;
}

export const getPerson = ({ personId }: IGetPersonParams): Promise<AxiosResponse<IPerson>> => {
  return axios.get<IPerson>(`person/${personId}`);
};
