import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  isHover : boolean = false;
  constructor() {}

  ngOnInit() : void{}

  onHover() {
    this.isHover = true;
  }

  // click( {target} )
  // {
  //   // target = document.getElementsByClassName('switch');
  //   target.style = "transform: rotateY(360deg)";
  //   // = "{transform: rotateY(180deg)}";
  //   console.log("turned");
  // }

}
