import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'team', component:TeamComponent},
  {path:'partners', component:PartnersComponent},
  {path:'products', component:OurproductsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'consulting', component:ConsultingComponent},
  {path:'press', component:PressComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
