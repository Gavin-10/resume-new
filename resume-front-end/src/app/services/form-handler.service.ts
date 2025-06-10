import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable,catchError, retry, throwError } from 'rxjs';

import { ContactMessageInterface } from '../interfaces/contact-message-interface';
import { MessageResponse } from '../interfaces/message-response';

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {
  private http = inject(HttpClient);

  constructor() { }

  async submit(toSubmit: ContactMessageInterface): Promise<void> {
    console.log(toSubmit);
    await this.handleSubmit(toSubmit).then((result) => {
        result.subscribe({
        next: result => {
          console.log("Server recived doc: ", result);
        },
        error: (err: Error) => {
          console.log(err.message);
        }
      })
    });
  }

  private async handleSubmit(toSubmit: ContactMessageInterface): Promise<Observable<MessageResponse>> {
    return await this.http.post<MessageResponse>('/messages', toSubmit)
      .pipe(
        retry(3),
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error("An internal error has occured"));
  }
}
