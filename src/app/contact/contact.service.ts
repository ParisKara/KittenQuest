import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    //console.log('Form Data:', formData);
    this.http
      .post('https://formsubmit.co/ead4afc9b17ed0b84d81d6d11017e922', formData)
      .subscribe(
        (response) => console.log('Response:', response),
        (error) => console.log('Error:', error)
      );
  }
}
