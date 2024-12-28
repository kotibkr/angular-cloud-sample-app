import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../shared/auth.service';
// import { GlobalConstants } '../constants/global-constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: "home",
      link: "app/home"
    },
    {
      label: "My Orders",
      icon: "help",
      link: "app/my-orders"
    },
    // {
    //   label: "My Account",
    //   icon: "attach_money",
    //   link: ""
    // },
    {
      label: "Refer",
      icon: "notes",
      link: "app/my-referals"
    },
    {
      label: "Settings",
      icon: "slideshow",
      link: "app/settings"
    },
    {
      label: "Sign Out",
      icon: "rss_feed",
      link: "/login"
    },
  ];
  isLoggedIn: boolean = false;

  constructor(private router: Router, private afAuth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      console.log("userrr", user, this.isLoggedIn);
    });
  }

  menuNavigate(item: any) {
    console.log("sign out::::", item);
    if (item.label === "Sign Out") {
      this.authService.signOut();
    } else {
      this.router.navigateByUrl(item.link);
    }
    
  }
}
