import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/service/offerservice';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  offerItems!: any[];

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getItems().then((items) => (this.offerItems = items));
  }
}
