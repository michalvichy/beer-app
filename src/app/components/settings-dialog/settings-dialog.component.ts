import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {
  public settings$ = this.settingsService.settings$;
  private i = 0;
  constructor(private settingsService: SettingsService) {}

  ngOnInit() {}

  changeSetting() {
    this.i += 1;
    this.settingsService.updateSettings({ perPage: this.i });
  }
}
