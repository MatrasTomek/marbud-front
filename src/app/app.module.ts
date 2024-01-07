import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { StartComponent } from './pages/start/start.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './pages/works/works.component';
import { PhotoService } from './service/photoservice';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OfferItemComponent } from './components/offer-item/offer-item.component';
import { OfferService } from './service/offerservice';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    WorksComponent,
    WorkItemComponent,
    OfferComponent,
    OfferItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    AccordionModule,
    FieldsetModule,
    GalleriaModule,
    DividerModule,
    ImageModule,
  ],
  providers: [PhotoService, OfferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
