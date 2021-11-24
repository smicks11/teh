import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.css']
  })
export class  ContactSectionComponent implements OnInit {
  myForm: FormGroup;
 
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
 
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
 
  ngOnInit() {
    this.addRecaptchaScript();
  }

  get name() {
    return this.myForm.get('name');
  }

  get email() {
    return this.myForm.get('email');
  }

  get subject() {
    return this.myForm.get('subject');
  }

  get message() {
    return this.myForm.get('message');
  }
  

  sendMessage() {
    this.validateAllFields();
    if(this.myForm.invalid){
      return;
    }

    console.log('Name', this.name.value);
    console.log('Email', this.email.value);
    console.log('Message', this.message.value);
    console.log('Subject', this.subject.value);
  }

  validateAllFields() {         
    Object.keys(this.myForm.controls).forEach(field => { 
      debugger; 
        const control = this.myForm.get(field);  
        control.markAsTouched({ onlySelf: true });          
    });
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
