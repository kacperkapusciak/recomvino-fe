import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IPerson } from '../../types';

export const getPeople = (): Promise<AxiosResponse<IPerson[]>> => {
  return axios.get<IPerson[]>('person/');
};
