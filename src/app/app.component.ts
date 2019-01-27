import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') class;

  onSetTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.class = theme;
  }

  constructor(public dialog: MatDialog, public overlayContainer: OverlayContainer) {
    this.onSetTheme('light-theme');
  }

  openDialog(): void {
    this.dialog.open(SettingsDialogComponent, { width: '400px' });
  }
}
