import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  constructor() { }

  getReferralLink(referralCode: string): string {
    return `https://yourwebsite.com?ref=${referralCode}`;
  }
}
