import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AboutInnerContentComponent,
  AboutSectionComponent,
  BreadcrumbComponent,
  CarouselComponent,
  ContactSectionComponent,
  CountsSectionComponent,
  DetailsSectionComponent,
  FaqSectionComponent,
  GallerySectionComponent,
  PreLoaderComponent,
  SupportContentComponent,
  TeamSectionComponent,
  TenderLiftContentComponent,
  TestimonialSectionComponent,
  VolunteerContentComponent,
} from "./components";

@NgModule({
  declarations: [
    AboutInnerContentComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CarouselComponent,
    ContactSectionComponent,
    CountsSectionComponent,
    DetailsSectionComponent,
    FaqSectionComponent,
    GallerySectionComponent,
    PreLoaderComponent,
    SupportContentComponent,
    TeamSectionComponent,
    TenderLiftContentComponent,
    TestimonialSectionComponent,
    VolunteerContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutInnerContentComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CarouselComponent,
    ContactSectionComponent,
    CountsSectionComponent,
    DetailsSectionComponent,
    FaqSectionComponent,
    GallerySectionComponent,
    PreLoaderComponent,
    SupportContentComponent,
    TeamSectionComponent,
    TenderLiftContentComponent,
    TestimonialSectionComponent,
    VolunteerContentComponent,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
