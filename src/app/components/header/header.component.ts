import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {
        label: 'Start',
        icon: PrimeIcons.HOME,
        routerLink: 'start',
      },
      {
        label: 'O nas',
        icon: 'pi pi-fw pi-user',
        routerLink: 'about-us',
      },
      {
        label: 'Oferta',
        icon: 'pi pi-fw pi-building',
        routerLink: '',
      },
      { label: 'Realizacje', icon: 'pi pi-fw pi-images', routerLink: '' },
      { label: 'Kontakt', icon: 'pi pi-fw pi-map', routerLink: '' },
    ];
    this.activeItem = this.items[0];
  }
}
