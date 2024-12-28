import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule]
})
export class RegisterComponent {
  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    // lastname: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  onSignup() {
    if (!this.signupForm.valid) {
      return;
    }
    this.auth.register(this.signupForm.value.email, this.signupForm.value.password);
  }

  gotoLogin() {
    this.router.navigate(["/login"]);
  }
}
