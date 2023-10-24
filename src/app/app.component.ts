import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'marbud-front-main';

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
