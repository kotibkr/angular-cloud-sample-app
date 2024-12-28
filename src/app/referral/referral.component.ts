import { Component } from '@angular/core';
import { ReferralService } from './referral.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent {

  referralCode: string = '';
  referralLink: string = '';

  constructor(private referralService: ReferralService) {}

  generateReferralLink() {
    this.referralLink = this.referralService.getReferralLink(this.referralCode);
  }

  copyLink(link: string) {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  }
}
