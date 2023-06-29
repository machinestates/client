import { GameCoinInterface } from "./game-coin.interface";
import { GameItemInterface } from "./game-item.interface";

export interface GameInventoryInterface {
  debt: number;
  fiatcoin: number;
  coinsCapacity: number;
  itemsCapacity: number;
  coins: GameCoinInterface[];
  items: GameItemInterface[];
  log: string[];
}