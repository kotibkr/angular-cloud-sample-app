import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings: Settings = {
    username: '',
    email: '',
    notifications: true
  };

  getSettings(): Settings {
    return this.settings;
  }

  updateSettings(newSettings: Settings): void {
    this.settings = { ...this.settings, ...newSettings };
  }
}
