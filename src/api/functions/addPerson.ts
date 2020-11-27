import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IPerson } from '../../types';

interface IAddPersonParams {
  name: string;
}

export const addPerson = ({ name }: IAddPersonParams): Promise<AxiosResponse<IPerson>> => {
  return axios.post<IPerson>(`person/`, { name });
};
