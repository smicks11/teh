import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CarouselComponent } from './components/layout/carousel/carousel.component';
import { AboutSectionComponent } from './components/layout/about-section/about-section.component';
import { CountsSectionComponent } from './components/layout/counts-section/counts-section.component';
import { DetailsSectionComponent } from './components/layout/details-section/details-section.component';
import { GallerySectionComponent } from './components/layout/gallery-section/gallery-section.component';
import { TestimonialSectionComponent } from './components/layout/testimonial-section/testimonial-section.component';
import { TeamSectionComponent } from './components/layout/team-section/team-section.component';
import { FaqSectionComponent } from './components/layout/faq-section/faq-section.component';
import { ContactSectionComponent } from './components/layout/contact-section/contact-section.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PreLoaderComponent } from './components/layout/pre-loader/pre-loader.component';
import { BackToTopComponent } from './components/layout/back-to-top/back-to-top.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { AboutInnerContentComponent } from './components/layout/about-inner-content/about-inner-content.component';
import { TenderLiftComponent } from './components/pages/tender-lift/tender-lift.component';
import { TenderLiftContentComponent } from './components/layout/tender-lift-content/tender-lift-content.component';
import { VolunteerComponent } from './components/pages/volunteer/volunteer.component';
import { VolunteerContentComponent } from './components/layout/volunteer-content/volunteer-content.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { SupportLayoutComponent } from './components/pages/support-layout/support-layout.component';
import { SupportContentComponent } from './components/layout/support-content/support-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AboutSectionComponent,
    CountsSectionComponent,
    DetailsSectionComponent,
    GallerySectionComponent,
    TestimonialSectionComponent,
    TeamSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    PreLoaderComponent,
    BackToTopComponent,
    AboutComponent,
    HomeComponent,
    BreadcrumbComponent,
    AboutInnerContentComponent,
    TenderLiftComponent,
    TenderLiftContentComponent,
    VolunteerComponent,
    VolunteerContentComponent,
    ContactComponent,
    FaqComponent,
    SupportLayoutComponent,
    SupportContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
