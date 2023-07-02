import { AuthStateInterface } from './auth/auth-state.interface';
import { TradeStateInterface } from './trade/trade-state.interface';
import { UserStateInterface } from './user/user-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface,
  trade: TradeStateInterface,
  user: UserStateInterface
}
