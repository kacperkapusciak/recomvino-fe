import { IWine } from '.';

export interface IFavoriteWine extends IWine {
  isFavorite?: boolean;
}
