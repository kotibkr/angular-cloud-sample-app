import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.user$ = fireAuth.authState;
  }

  // Check if user is logged in and return the user's data
  isUserLoggedIn(): Observable<boolean> {
    return this.fireAuth.authState.pipe(
      map((user: any) => {
        console.log("userrrr auth", user);
        if (user) {
          // Redirect to the desired path if user is logged in
          // this.router.navigate(['/app/home']); // For example, redirect to the dashboard
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

  //Login Method
  login(email: any, password: any) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem("token", 'true');
      this.router.navigate(["/app/home"]);
      this.loggedIn.next(true);
    }, (error) => {
      alert("Something went wrong");
      this.router.navigate(["/login"]);
    })
  }

  //Register Method
  register(email: any, password: any) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Registration has Successfull");
      this.router.navigate(["/login"]);
    }, (error) => {
      alert("Something went wrong");
      this.router.navigate(["/login"]);
    })
  }

  isAuthenticated() {
    return this.loggedIn.asObservable();
  }

  //Sign out
  signOut() {
    this.fireAuth.signOut().then(() => {
      console.log('User signed out');
      this.loggedIn.next(false);
      localStorage.setItem("token", "false");
      this.router.navigate(['/login']);  // Redirect to login page after sign-out
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  }
}
