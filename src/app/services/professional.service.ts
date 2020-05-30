import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs/index';
import { catchError, retry } from 'rxjs/internal/operators';
import { Professional } from 'src/app/models/professional';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  professional: Professional[];

  loginProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/loginPro';
  editProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/edit'; // + id
  addProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/pro-add';
  listProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/professionnels';
  listProByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/professionnel'; // + id
  removeProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/pro-delete'; // + id
  nbProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/pro-number';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };

  id: number;
  apiKey: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  siret: string;

  private currentProfessionalObject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.currentProfessionalObject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentProfessionalObject.asObservable();
  }
  getPros(professional: ProfessionalService): Observable<Professional> {
    return this.httpClient.post<Professional>(this.loginProUrl, professional, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getAllProfessionals(): Observable<Professional[]> {
    return this.httpClient.get<Professional[]>(this.listProUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getProfessionalById(id: number): Observable<Professional> {
    return this.httpClient.get<Professional>(this.listProByIdUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  add(professional: Professional): Observable<Professional> {
    return this.httpClient.post<Professional>(this.addProUrl, professional).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deletePro(id: number) {
    return this.httpClient.delete<Professional>(this.removeProUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public get currentUserValue() {
    return this.currentProfessionalObject.value;
  }

  login(username, password): Observable<any> {
    return this.httpClient.post<any>(`${this.loginProUrl}`, { username, password })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentProfessionalObject.next(null);
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
