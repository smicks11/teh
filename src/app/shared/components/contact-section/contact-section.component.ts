import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
 
@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.css']
  })
export class  ContactSectionComponent implements OnInit {
 
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
 
  constructor() { }
 
  ngOnInit() {
    this.addRecaptchaScript();

    
  }
 
  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
          console.log(response);
      }
    });
  }
 
  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
 
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
 
  }

  showMsg: boolean = false;
  // nameVar: boolean = false;

  protected onClickSubmit(formSubmit: NgForm) : void {
    // alert(formSubmit.email);
    
    
    this.showMsg= true;
    formSubmit.resetForm();
    
 }
 

 
 
}



















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contact-section',
//   templateUrl: './contact-section.component.html',
//   styleUrls: ['./contact-section.component.css']
// })




// export class ContactSectionComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
