import { ScoreInterface } from "../trade/score.interface";

export interface UserProfileInterface {
  profile: {
    bio: string | null;
    username: string;
    avatar: string | null;
  }
  totalEarnings: number;
  rounds: ScoreInterface[];
}