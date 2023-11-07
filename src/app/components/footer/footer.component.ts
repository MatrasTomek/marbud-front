import { Component } from '@angular/core';
import { footerData } from '../../../assets/constansData/footerData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerData;

  constructor() {
    this.footerData = footerData;
  }
}
