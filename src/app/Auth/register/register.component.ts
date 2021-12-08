import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  errors = null;
  preview: string;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.RegisterForm = this.fb.group({
      Firstname: [''],
      Lastname: [''],
      Email: [''],
      Password: [''],
      Image: [null],
      Phone: [''],
      City: [''],
    });
  }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      Firstname: new FormControl(null, Validators.required),
      Lastname: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.minLength(15),
      ]),
      Image: new FormControl(null, [Validators.required]),
      Phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      City: new FormControl(null, Validators.required),
    });
  }

  uploadFile(event: any) {
    const file = (event.target as HTMLFormElement).files[0];
    this.RegisterForm.patchValue({
      foto: file,
    });
    this.RegisterForm.get('Photo')!.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.authService.Register(this.RegisterForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.RegisterForm.reset();
        this.router.navigate(['Login']);
      }
    );
  }
}
