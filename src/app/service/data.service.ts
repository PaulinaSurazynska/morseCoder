import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('./assets/translations.json').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side or network error
      console.error('An errror occured', error.error.message);
    } else {
      // backend error;  invalid in this case but added for consistency
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // error masseged passed to the component 
    return throwError(`There was a problem with loading the data, please try again later`);
  }
}
