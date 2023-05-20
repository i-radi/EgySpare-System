export interface TokenDto {
  message: string;
  isAuthenticated: Boolean;
  role: string;
  token: string;
  expiresOn: string;
}
