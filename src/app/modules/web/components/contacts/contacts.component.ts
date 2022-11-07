import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import axios from 'axios';

import data from '../../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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

  constructor(private cdr: ChangeDetectorRef, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      subject: ['', [Validators.required, Validators.maxLength(25)]],
      message: ['', [Validators.required, Validators.maxLength(50)]],
      recaptcha: ['', Validators.required],
    });
  }

  successHandle(item: any) {
    axios.post('./handler.php', item).then((res) => {
      console.log(res);
    });
  }

  get myFormControl() {
    return this.myForm.controls;
  }

  handleSuccess(event: any) {
    console.log(event);
  }

}
