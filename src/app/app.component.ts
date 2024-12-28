import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { AuthService } from './shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-routing-best-practices';
  showNavbar = false;
  showRouterOutlet = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService, private fireAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
    console.log("root navigation");
    this.isAuthenticated();
  }

  isAuthenticated() {
    this.authService.user$.subscribe((user) => {
      if (user) {
          this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      this.authService.isUserLoggedIn().subscribe((res: any) => {
        setTimeout(() => {
          this.showRouterOutlet = true;
        }, 1000);
      });
    });
  }
}
