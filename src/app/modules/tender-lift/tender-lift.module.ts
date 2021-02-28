import { NgModule } from "@angular/core";

import { TenderLiftRoutingModule } from "./tender-lift-routing.module";
import { SharedModule } from "@app/shared";
import { TenderLiftComponent } from "./pages/tender-lift/tender-lift.component";

@NgModule({
  declarations: [TenderLiftComponent],
  imports: [SharedModule, TenderLiftRoutingModule],
})
export class TenderLiftModule {}
