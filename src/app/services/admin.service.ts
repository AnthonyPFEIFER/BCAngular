import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs/index';
import { catchError, retry } from 'rxjs/internal/operators';
import { Admin } from 'src/app/models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin: Admin[];

  loginAdminURL = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/login';



  id: number;
  apiKey: string;
  username: string;
  password: string;
  private currentAdminObject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };

  constructor(private httpClient: HttpClient) {
    this.currentAdminObject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentAdminObject.asObservable();
  }
  public get currentUserValue() {
    return this.currentAdminObject.value;
  }



  login(username, password): Observable<any> {
    return this.httpClient.post<any>(`${this.loginAdminURL}`, { username, password }, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  logout() {
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
