import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent {
  @Input() beer: Beer;

  showFullImage = false;

  onToggleImage() {
    this.showFullImage = !this.showFullImage;
  }
}
