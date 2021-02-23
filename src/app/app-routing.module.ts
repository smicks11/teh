import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TenderLiftComponent } from './components/pages/tender-lift/tender-lift.component';
import { VolunteerComponent } from './components/pages/volunteer/volunteer.component';
import { SupportLayoutComponent } from './components/pages/support-layout/support-layout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tenderlift', component: TenderLiftComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'support', component: SupportLayoutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
