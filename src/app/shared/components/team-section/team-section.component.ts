import { Component, OnInit } from '@angular/core';
import { CardClass } from '@app/card-class.model';
import { ImageDisplayClass } from '@app/image-display-class.model';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  isFlipped = false;
  teamMembers: CardClass[] = [];
  // index : any;
  constructor() { }

  ngOnInit(): void { 
    this.initTeamMembers();
  }

  initTeamMembers() {
    const memeberOne = new CardClass();
    memeberOne.name = "Jeff king";
    memeberOne.desc = "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning.";
    memeberOne.role = "Founder & Director";
    memeberOne.facebookIcon = "#";
    memeberOne.instagramIcon = "#";
    memeberOne.linkedInIcon = "#";
    memeberOne.twitterIcon = "#";
    memeberOne.imageUrl = "team_1.jpg";

    this.teamMembers.push(memeberOne);

    const memeberTwo = new CardClass();
    memeberTwo.name = "Juliet Badmus";
    memeberTwo.desc = "This is juliet badmus. He is the it head of this great institute and he has shown great leadership attributes towards this citadel of learning.";
    memeberTwo.role = "IT Head";
    memeberTwo.facebookIcon = "#";
    memeberTwo.instagramIcon = "#";
    memeberTwo.linkedInIcon = "#";
    memeberTwo.twitterIcon = "#";
    memeberTwo.imageUrl = "team_2.jpg";
    this.teamMembers.push(memeberTwo);

    const memberThree = new CardClass();
    memberThree.name = "Tracy maduka";
    memberThree.desc = "This is Tracy maduka. He is the it head of this great institute and he has shown great leadership attributes towards this citadel of learning.";
    memberThree.role = "IT Analyst";
    memberThree.facebookIcon = "#";
    memberThree.instagramIcon = "#";
    memberThree.linkedInIcon = "#";
    memberThree.twitterIcon = "#";
    memberThree.imageUrl = "team_1.jpg";
    this.teamMembers.push(memberThree);

    const memberFour = new CardClass();
    memberFour.name = "Jolade Oni";
    memberFour.desc = "This is Jolade Oni. He is the it head of this great institute and he has shown great leadership attributes towards this citadel of learning.";
    memberFour.role = "Treasurer";
    memberFour.facebookIcon = "#";
    memberFour.instagramIcon = "#";
    memberFour.linkedInIcon = "#";
    memberFour.twitterIcon = "#";
    memberFour.imageUrl = "team_1.jpg";
    this.teamMembers.push(memberFour);
  }

  flipCard(teamMember: CardClass) {
      teamMember.isFlipped = !teamMember.isFlipped;
      console.error("isFlipped", teamMember.isFlipped);
  }

  // cardBuild: CardClass[] = [
  //   new CardClass("Jeff King", "Founder & Director", "#", "#", "#", "#", "team_1.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning."),
  //   new CardClass("Juliet Badmus", "General Secretary", "#", "#", "#", "#", "team_2.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning"),
  //   new CardClass("Jeff King", "IT Head", "#", "#", "#", "#", "team_1.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning"),
  //   new CardClass("Jolade Oni", "Treasurer", "#", "#", "#", "#", "team_2.jpg", "This is jeff king. He is the founder and director of this great institute and he has shown great leadership attributes towards this citadel of learning"),
  // ];

}
