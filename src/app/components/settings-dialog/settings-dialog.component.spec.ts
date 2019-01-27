import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule, MatSelectModule } from '@angular/material';
import { SettingsDialogComponent } from './settings-dialog.component';
import { DEFAULT_SETTINGS_TOKEN } from './../../config';
import { SettingsService } from './../../services/settings.service';

describe('SettingsDialogComponent', () => {
  let component: SettingsDialogComponent;
  let fixture: ComponentFixture<SettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDialogComponent],
      imports: [MatSliderModule, MatSelectModule],
      providers: [SettingsService, { provide: DEFAULT_SETTINGS_TOKEN, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
