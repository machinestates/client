export interface CoinInterface {
  uuid: string;
  coinUuid: string;
  name: string;
  image: string | null;
  iconImage: string | null;
  description: string | null;
  amount: number;
  createdAt: string;
  updatedAt: string;
  transaction?: string;
}