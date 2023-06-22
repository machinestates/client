export interface GameCoinInterface {
  name: string;
  iconImage: string;
  image: string;
  squareImage: string;
  description: string;
  uuid: string;
  buyQuantity: number;
  sellQuantity: number;
  price: number;
  isExpensive: boolean;
  isCheap: boolean;
  amount?: number;
}