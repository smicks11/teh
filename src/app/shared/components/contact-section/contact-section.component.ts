import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
// import { ValidatePassword } from "./must-match/validate-password";

@Component({
      selector: 'app-contact-section',
      templateUrl: './contact-section.component.html',
      styleUrls: ['./contact-section.component.css']
    })

export class ContactSectionComponent {
  alert:boolean=false;
  submitted = false;

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
  
  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.addRecaptchaScript();
  }

  /*##################### Registration Form #####################*/
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]+$')]],
    subject: ['', [Validators.required, Validators.minLength(2),]],
    message: ['', [Validators.required, Validators.minLength(2),]],
  })  

  

  // Getter method to access formcontrols
  get myForm() {
    return this.contactForm.controls;
  }


  // Submit Form
  onSubmit() {
    this.submitted = true;
    if(!this.contactForm.valid) {
      alert('Please fill all the required fields to send a message!')
      return false;
    } else {
      this.alert=true;
      console.log(this.contactForm.value)
      this.contactForm.reset({});
    }
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
}


