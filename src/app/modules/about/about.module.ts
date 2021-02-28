import { NgModule } from "@angular/core";

import { AboutRoutingModule } from "./about-routing.module";
import { SharedModule } from "@app/shared";
import { AboutComponent } from "./pages/about/about.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule],
})
export class AboutModule {}
