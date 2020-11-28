import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IWine } from '../../types';

export const getWines = (): Promise<AxiosResponse<IWine[]>> => {
  return axios.get<IWine[]>('wine/');
};
