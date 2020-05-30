import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Fuel } from 'src/app/models/fuel';
@Injectable({
  providedIn: 'root'
})
export class FuelService {

  fuel: Fuel[];

  listFuelsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/fuels';
  fuelByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/fuel';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };

  constructor(private httpClient: HttpClient) {
    this.fuel = [];
  }
  getAllFuel(): Observable<Fuel[]> {
    return this.httpClient.get<Fuel[]>(this.listFuelsUrl)
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
