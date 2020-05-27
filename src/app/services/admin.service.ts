import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs/index';
import { catchError, retry } from 'rxjs/internal/operators';
import { Admin } from 'src/app/models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginURL = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/login';

  admin: Admin[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };
  id: number;
  apiKey: string;
  username: string;
  password: string;
  headers = new HttpHeaders().append('X-Api-Key', 'ApiKey');
  private currentAdminObject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.currentAdminObject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentAdminObject.asObservable();
  }
  public get currentUserValue() {
    return this.currentAdminObject.value;
  }

  login(username, password): Observable<any> {
    return this.httpClient.post<any>(`${this.loginURL}`, { username, password })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentAdminObject.next(null);
  }



  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
