import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IWine } from '../../types';

interface IGetWineParams {
  wineId: string;
}

export const getWine = ({ wineId }: IGetWineParams): Promise<AxiosResponse<IWine>> => {
  return axios.get<IWine>(`wine/${wineId}`);
};
