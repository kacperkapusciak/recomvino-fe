import { AxiosResponse } from 'axios';
import axios from '../instance';
import { IRecommendation } from '../../types';

interface IGetRecommendationsParams {
  personId: string;
}

export const getRecommendations = ({
  personId,
}: IGetRecommendationsParams): Promise<AxiosResponse<IRecommendation[]>> => {
  return axios.get<IRecommendation[]>(`recommendations/${personId}`);
};
