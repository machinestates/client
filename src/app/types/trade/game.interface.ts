import { GameExchangeInterface } from "./game-exchange.interface";
import { GameInventoryInterface } from "./game-inventory.interface";
import { GameItemInterface } from "./game-item.interface";

export interface GameInterface {
  uuid?: string;
  createdAt: string;
  completed: boolean;
  score?: number;
  day: number;
  lastDay: number;
  exchange: GameExchangeInterface
  exchanges: GameExchangeInterface[];
  inventory: GameInventoryInterface;
  itemsUsed: GameItemInterface[];
  ghosted: boolean;
}