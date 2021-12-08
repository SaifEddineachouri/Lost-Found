import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private issuer = {
    // 7ot links te3  api
    login: '',
    register: '',
  };

  constructor() {}

  handleToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    localStorage.getItem('auth_token');
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
