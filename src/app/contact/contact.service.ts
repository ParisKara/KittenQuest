import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    return this.http
      .post('https://mailthis.to/pariskarampatzakis@gmail.com', input, {
        responseType: 'text',
      })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}
