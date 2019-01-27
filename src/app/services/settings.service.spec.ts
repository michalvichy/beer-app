import { TestBed, fakeAsync } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { Settings } from '../models/settings.interface';
import { DEFAULT_SETTINGS_TOKEN } from '../config';

const fakeSettings: Settings = {
  perPage: 0,
  theme: 'light-theme'
};

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DEFAULT_SETTINGS_TOKEN, useValue: fakeSettings }]
    });

    service = TestBed.get(SettingsService);
  });

  afterEach(() => {
    service = null;
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default settings', () => {
    service.settings$.subscribe(settings => {
      expect(settings).toEqual(fakeSettings);
    });
  });

  it('should update settings$ with given setting', () => {
    service.updateSettings({ perPage: 20 });
    const expected = { ...fakeSettings, perPage: 20 };

    service.settings$.subscribe(settings => {
      expect(settings).toEqual(expected);
    });
  });
});
