import { AvatarInterface } from "./avatar.interface";
import { GameInterface } from "./game.interface";
import { ScoresInterface } from "./scores.interface";
import { TradeErrorInterface } from "./trade-error.interface";

export interface TradeStateInterface {
  inProgress: boolean | null;
  isSubmitting: boolean;
  scores: ScoresInterface | null;
  error: TradeErrorInterface | null;
  isLoading: boolean;
  actionPending: boolean;
  game: GameInterface | null;
  avatar: AvatarInterface | null;
  publicKey: string | null;
}
