import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-fw pi-phone',
        label: '555-555-555',
      },
      {
        icon: 'pi pi-fw pi-user',
        routerLink: 'about-us',
      },
      { icon: 'pi pi-fw pi-map', routerLink: '' },
    ];
  }
}
