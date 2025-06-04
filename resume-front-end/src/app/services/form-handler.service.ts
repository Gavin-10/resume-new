import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable,catchError, retry, throwError } from 'rxjs';

import { ContactMessageInterface } from '../interfaces/contact-message-interface';

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {
  private http = inject(HttpClient);

  constructor() { }

  submit(toSubmit: ContactMessageInterface): void {
    console.log(toSubmit);
    this.handleSubmit(toSubmit).subscribe({
      next: result => {
        console.log("Server recived doc: ", result);
      },
      error: (err: Error) => {
        console.log(err.message);
      }
    })
  }

  private handleSubmit(toSubmit: ContactMessageInterface): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/messages', toSubmit)
      .pipe(
        retry(3),
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error("An internal error has occured"));
  }
}
