import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SupportComponent } from "./pages/support/support.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SupportComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
