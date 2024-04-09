import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WorksComponent } from './pages/works/works.component';
import { OfferComponent } from './pages/offer/offer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'oferta',
    component: OfferComponent,
  },
  {
    path: 'realizacje',
    component: WorksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
