import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from '../models/settings.interface';
import { DEFAULT_SETTINGS_TOKEN } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private persistedSettings =
    JSON.parse(localStorage.getItem(this.keyName)) || this.defaultSettings;

  private _settings$: BehaviorSubject<Settings> = new BehaviorSubject(this.persistedSettings);

  public settings$ = this._settings$.asObservable();

  constructor(@Inject(DEFAULT_SETTINGS_TOKEN) private defaultSettings: Settings) {}

  public updateSettings(setting: Partial<Settings>) {
    const currentSettings = this._settings$.getValue();

    const newSettings = { ...currentSettings, ...setting };

    this._settings$.next(newSettings);

    this.saveSettings(newSettings);
  }

  private saveSettings(settings: Settings) {
    localStorage.setItem(this.keyName, JSON.stringify(settings));
  }

  private get keyName() {
    return 'settings';
  }
}
