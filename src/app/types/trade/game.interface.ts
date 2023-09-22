import { GameCoinInterface } from "./game-coin.interface";
import { GameExchangeInterface } from "./game-exchange.interface";
import { GameInventoryInterface } from "./game-inventory.interface";
import { GameItemInterface } from "./game-item.interface";

export interface GameInterface {
  uuid?: string;
  createdAt: string;
  completed: boolean;
  minted?: boolean;
  score?: number;
  coins?: GameCoinInterface[];
  day: number;
  lastDay: number;
  story?: string;
  storyAudio?: string;
  exchange: GameExchangeInterface
  exchanges: GameExchangeInterface[];
  inventory: GameInventoryInterface;
  itemsUsed: GameItemInterface[];
  ghosted: boolean;
  hasBurner: boolean;
}