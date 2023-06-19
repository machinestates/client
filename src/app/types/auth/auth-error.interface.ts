export interface AuthErrorInterface {
  status: number
  statusText: string;
  message: string;
  error: {
    message: string;
  }
}
