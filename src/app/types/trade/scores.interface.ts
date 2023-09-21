import { ScoreInterface } from "./score.interface";
import { EarningsInterface } from "./earnings.interface";

export class ScoresInterface {
  today: ScoreInterface[];
  alltime: ScoreInterface[];
  earnings: EarningsInterface[];
}
