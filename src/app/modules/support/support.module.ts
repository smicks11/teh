import { NgModule } from "@angular/core";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./pages/support/support.component";
import { SharedModule } from "@app/shared";

@NgModule({
  declarations: [SupportComponent],
  imports: [SharedModule, SupportRoutingModule],
})
export class SupportModule {}
