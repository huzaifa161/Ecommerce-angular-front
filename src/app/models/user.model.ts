import { Role } from './Role';

export class User {
  constructor(
    public email: string,
    public id: number,
    private _token: string,
    private _tokenExpirationDate: Date,
    public role:Role
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
