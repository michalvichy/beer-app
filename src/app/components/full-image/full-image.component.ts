import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullImageComponent implements OnInit {
  @Input() imageUrl = './../../../assets/beer-placeholder.png';

  @Output() clicked = new EventEmitter();

  @HostListener('click') onclick() {
    this.clicked.emit();
  }

  constructor() {}

  ngOnInit() {}
}
