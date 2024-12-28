import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MaterialModule } from 'src/app/shared/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MaterialModule, FlexLayoutModule]
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Check if the user is already logged in
    this.auth.isUserLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(["/login"]);
       
      } else {
        // this.auth.isUserLoggedIn();
        // this.router.navigate(['app/home']);
        // User is logged in, they are redirected to the dashboard
        // Redirection happens in the service, so no further action needed here.
      }
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.valid) {
      console.log("login details", this.loginForm.value, this.loginForm.value.email, this.loginForm.value.email);
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      this.loginForm.value.email = {};
      this.loginForm.value.password = {};
    }
  }

  signUp() {
    this.router.navigate(["/sign-up"]);
  }
}
