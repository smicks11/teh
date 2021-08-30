import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AboutComponent,
        data: {
          title: 'About Us'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
