import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  sendEmailForm: FormGroup;
  constructor(private contact: ContactService) {}

  ngOnInit() {
    this.sendEmailForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      emai: new FormControl(null, [Validators.required, Validators.email]),
      city: new FormControl(null, Validators.required),
      postalCode: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      checkbox: new FormControl(false, Validators.requiredTrue),
    });
  }

  onSubmit() {
    console.log(this.sendEmailForm.value);
  }
}
