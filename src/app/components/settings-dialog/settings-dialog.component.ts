import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { MatSliderChange, MatSelectChange } from '@angular/material';
import { Theme } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {
  public settings$ = this.settingsService.settings$;
  public themes = ['Light', 'Dark'];

  constructor(private settingsService: SettingsService) {}

  onSlide({ value }: MatSliderChange) {
    this.settingsService.updateSettings({ perPage: value });
  }

  onChangeTheme({ value }: MatSelectChange) {
    const theme = `${value.toLowerCase()}-theme` as Theme;

    this.settingsService.updateSettings({ theme });
  }
}
