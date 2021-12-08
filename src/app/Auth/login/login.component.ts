import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Shared/token.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors = null;
  LoginForm: FormGroup;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
  ) {
    this.LoginForm = this.fb.group({
      Email: [],
      Password: [],
    });
  }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(15),
      ]),
      Remember: new FormControl(),
    });
  }

  onSubmit() {
    this.authService.Login(this.LoginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.LoginForm.reset();
        this.router.navigate(['Dashboard/home']);
      }
    );
  }

  // Handle response
  responseHandler(data: any) {
    this.token.handleToken(data.access_token);
  }
}
