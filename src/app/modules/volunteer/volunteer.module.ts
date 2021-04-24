import { NgModule } from "@angular/core";

import { VolunteerRoutingModule } from "./volunteer-routing.module";
import { SharedModule } from "@app/shared";
import { VolunteerComponent } from "./pages/volunteer/volunteer.component";

@NgModule({
  declarations: [VolunteerComponent],
  imports: [SharedModule, VolunteerRoutingModule],
})
export class VolunteerModule {}
