import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingsService } from './services/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub$: Subscription = new Subscription();

  @HostBinding('class') class;

  constructor(
    private dialog: MatDialog,
    private overlayContainer: OverlayContainer,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.sub$ = this.settingsService.settings$.subscribe(settings => {
      this.onSetTheme(settings.theme);
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  public openDialog(): void {
    this.dialog.open(SettingsDialogComponent, { width: '400px' });
  }

  private onSetTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.class = theme;
  }
}
