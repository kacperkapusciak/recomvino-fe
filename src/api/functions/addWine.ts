import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IWine } from '../../types';

interface IAddWineParams {
  name: string;
  brand: string;
  flavor: string;
  price: number;
}

export const addWine = ({ name, brand, flavor, price }: IAddWineParams): Promise<AxiosResponse<IWine>> => {
  return axios.post<IWine>(`wine/`, { name, brand, flavor, price });
};
