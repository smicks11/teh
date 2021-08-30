import { NgModule } from "@angular/core";

import { VolunteerRoutingModule } from "./volunteer-routing.module";
import { SharedModule } from "@app/shared";
import { VolunteerComponent } from "./pages/volunteer/volunteer.component";

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from "rxjs/operators";

@NgModule({
  declarations: [VolunteerComponent],
  imports: [SharedModule, VolunteerRoutingModule],
})
export class VolunteerModule {
  constructor (private router: Router, private activatedRoute:    ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                } else if (child.snapshot.data &&    child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                } else {
                    return null;
                }
            }
            return null;
        })
    ).subscribe( (data: any) => {
        if (data) {
            this.titleService.setTitle(data + ' | Jesus Children Missions Outreachz');
        }
    });
    }
}
