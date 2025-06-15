import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable,catchError, retry, throwError } from 'rxjs';

import { ContactMessageInterface } from '../interfaces/contact-message-interface';
import { MessageResponse } from '../interfaces/message-response';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  constructor() {}

  async submit(toSubmit: ContactMessageInterface): Promise<void> {
    const observableMessageResponse = await this.handleSubmit(toSubmit);

    observableMessageResponse.subscribe({
      next: result => {
        if (window.innerWidth >= 800) {
          this.snackBar.open("Contact form submitted successfully", "Dismiss")
        } else {
          window.alert("Contact form submitted successfully");
        }
      },
      error: err => {
        console.log(err.message);
        if (window.innerWidth >= 800) {
          this.snackBar.open("An internal error has occured. Please try again later.", "Dismiss");
        } else {
          window.alert("An internal error has occured. Please try again later.");
        }
      }
    })

    
  }

  private async handleSubmit(toSubmit: ContactMessageInterface): Promise<Observable<MessageResponse> > {
    return await this.http.post<MessageResponse>('/messages', toSubmit)
      .pipe(
        retry(3),
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 500:
        return throwError(() => new Error("Failed to add doc to database"));
      case 404:
        return throwError(() => new Error("Failed to connect to database API"));
      case 418:
        window.location.href = "https://www.google.com/";
        return throwError(() => new Error("The server turned into a tea pot"));
      case 400:
        return throwError(() => new Error("Document validation failed"));
      default:
        return throwError(() => new Error("An unknown internal error has occured"));   
    }
  }
}
