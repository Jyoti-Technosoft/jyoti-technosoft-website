import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import data from '../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
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

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

}
