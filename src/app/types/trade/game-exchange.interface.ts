import { GameCoinInterface } from "./game-coin.interface";

export interface GameExchangeInterface {
  uuid: string;
  name: string;
  image: string;
  iconImage: string;
  squareImage: string;
  description: string;
  hasLoan: boolean;
  hasDanger: boolean;
  explored: boolean | null;
  found: {
    type: string;
    coins: number | null;
    items: number | null;
    danger: boolean | null;
    lossFromDanger: number | null;
    description: string;
  } | null;
  coins: GameCoinInterface[];
  lossFromDanger: number; 
}