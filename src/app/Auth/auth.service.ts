import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../Models/userLogin';
import { FormGroup } from '@angular/forms';
import { userRegister } from '../Models/userRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  HttpUploadOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/JSON' }),
  };

  constructor(private http: HttpClient) {}

  //User Registration
  Register(form: FormGroup): Observable<any> {
    let user = new userRegister(
      form.value.Firstname,
      form.value.Lastname,
      form.value.Email,
      form.value.Password,
      form.value.Image,
      form.value.Phone,
      form.value.City
    );
    
    return this.http.post('', JSON.stringify(user), this.HttpUploadOptions);
  }

  //Login
  Login(userLogin: userLogin): Observable<any> {
    return this.http.post('', userLogin);
  }
}
