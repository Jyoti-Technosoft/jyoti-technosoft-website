import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ReCaptcha2Component } from 'ngx-captcha';
// import axios from 'axios';

import data from '../../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {
  myForm: FormGroup | any;
  content: any = data.ContactUs[0].content.heading;
  contact1: any = data.ContactUs[0].contactDetails.contact1;
  contact2: any = data.ContactUs[0].contactDetails.contact2;
  contact3: any = data.ContactUs[0].contactDetails.contact3;
  contact4: any = data.ContactUs[0].contactDetails.contact4;
  address: any = data.ContactUs[0].address.address;
  phone: any = data.ContactUs[0].address.phone;
  email: any = data.ContactUs[0].address.emailId;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public useGlobalDomain: boolean = false;
  hljs: any;
  // public type: 'image' | 'audio';

  // @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
  // @ViewChild('langInput', { static: false }) langInput: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      recaptcha: new FormControl('', Validators.required)
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }
  
  // ngAfterViewInit(): void {
  //   // this.highlight();
  // }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  onSubmit(event: any) {
    // axios.post("https://www.google.com/recaptcha/api/siteverify", payload).then(res => {
    // })
  }

}
