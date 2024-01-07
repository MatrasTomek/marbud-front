import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent {
  @Input() itemTitle!: string;
  @Input() itemDescription!: string;
  @Input() itemIcon!: string;
}
