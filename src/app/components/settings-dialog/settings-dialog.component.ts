import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {
  public settings$ = this.settingsService.settings$;

  constructor(private settingsService: SettingsService) {}

  onSlide({ value }: MatSliderChange) {
    this.settingsService.updateSettings({ perPage: value });
  }
}
