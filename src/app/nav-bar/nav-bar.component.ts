import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { Router } from '@angular/router';

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
      link: "app/feature-one"
    },
    {
      label: "My Account",
      icon: "attach_money",
      link: ""
    },
    {
      label: "Refer",
      icon: "notes",
      link: "app/feature-two"
    },
    {
      label: "Settings",
      icon: "slideshow",
      link: "feature-one"
    },
    {
      label: "Sign Out",
      icon: "rss_feed",
      link: "feature-one"
    },
  ];

  constructor(private router: Router) { }

  menuNavigate(item: any) {
    this.router.navigateByUrl(item.link);
  }
}
