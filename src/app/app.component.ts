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
      { label: 'Home', icon: PrimeIcons.HOME },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];
    this.activeItem = this.items[0];
  }
}
