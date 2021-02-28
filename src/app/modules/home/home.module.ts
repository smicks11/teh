import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "@app/shared";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
