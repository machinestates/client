import { CurrentUserInterface } from "./current-user.interface";
import { AuthErrorInterface } from "./auth-error.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface;
  isLoggedIn: boolean | null;
  error: AuthErrorInterface | null;
  isLoading: boolean;
}
