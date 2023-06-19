import { ScoresInterface } from "./scores.interface";
import { TradeErrorInterface } from "./trade-error.interface";

export interface TradeStateInterface {
  isSubmitting: boolean;
  scores: ScoresInterface | null;
  error: TradeErrorInterface | null;
  isLoading: boolean;
}
