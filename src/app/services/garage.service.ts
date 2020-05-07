import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Garage } from 'src/app/models/garage';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GarageService {

  listGaragesUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garages';
  garageByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garage';
  garageByProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garageByPro';
  nbGaragesUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garage-number';
  addGarageUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garage-add';
  editGarageUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garage-edit';
  deleteGarageUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/garage-delete';

  constructor(private httpClient: HttpClient) {

  }
  getAllGarages(): Observable<Garage[]> {
    return this.httpClient.get<Garage[]>(this.listGaragesUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
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
