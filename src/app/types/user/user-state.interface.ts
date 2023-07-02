import { UserErrorInterface } from "./user-error.interface";
import { ItemInterface } from "./item.interface";

export class UserStateInterface {
  isLoading: boolean;
  items: ItemInterface[] | null;
  error: UserErrorInterface | null;
}