export class User {
  constructor(
    public name: string,
    public userName: string,
    public email: string,
    public password: string,
    public phoneNumber: string,
    public confirmPassword: string,
    public role: any
  ) {}
}
