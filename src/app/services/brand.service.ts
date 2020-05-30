import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  brand: Brand[];

  listBrandsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/brands';
  brandByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/brand';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };

  constructor(private httpClient: HttpClient) {
    this.brand = [];
  }

  getAllBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.listBrandsUrl)
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
