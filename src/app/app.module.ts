import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { OurproductsComponent } from './ourproducts/ourproducts.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientsComponent } from './clients/clients.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { PressComponent } from './press/press.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    HomeComponent,
    ContactsComponent,
    AboutusComponent,
    ServicesComponent,
    TeamComponent,
    OurproductsComponent,
    PartnersComponent,
    ClientsComponent,
    ConsultingComponent,
    PressComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
