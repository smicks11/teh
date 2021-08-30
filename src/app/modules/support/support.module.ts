import { NgModule } from "@angular/core";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./pages/support/support.component";
import { SharedModule } from "@app/shared";

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from "rxjs/operators";

@NgModule({
  declarations: [SupportComponent],
  imports: [SharedModule, SupportRoutingModule],
})
export class SupportModule {
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
