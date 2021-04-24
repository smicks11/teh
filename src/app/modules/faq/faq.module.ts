import { NgModule } from "@angular/core";

import { FaqRoutingModule } from "./faq-routing.module";
import { SharedModule } from "@app/shared";
import { FaqComponent } from "./pages/faq/faq.component";

@NgModule({
  declarations: [FaqComponent],
  imports: [SharedModule, FaqRoutingModule],
})
export class FaqModule {}
