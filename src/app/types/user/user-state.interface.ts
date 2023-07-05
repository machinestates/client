import { UserErrorInterface } from "./user-error.interface";
import { ItemInterface } from "./item.interface";
import { CoinInterface } from "./coin.interface";

export class UserStateInterface {
  isLoading: boolean;
  items: ItemInterface[] | null;
  coins: CoinInterface[] | null;
  error: UserErrorInterface | null;
}