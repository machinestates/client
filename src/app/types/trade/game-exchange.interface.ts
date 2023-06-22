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
  coins: GameCoinInterface[];
  lossFromDanger: number; 
}