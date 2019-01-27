import { InjectionToken } from '@angular/core';
import { Settings } from './models/settings.interface';

export const API_URL_TOKEN = new InjectionToken<string>('apiUrl');

export const DEFAULT_SETTINGS_TOKEN = new InjectionToken<Settings>('defaultSettings');

export const defaultSettings: Settings = {
  theme: 'light-theme',
  perPage: 10
};
