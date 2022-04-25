import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendForm(formData) {
    //console.log('Form Data:', formData);
    this.http
      .post('https://formsubmit.io/send/putEmailHere', formData)
      .subscribe(
        (response) => console.log('Response:', response),
        (error) => console.log('Error:', error)
      );
  }
}
