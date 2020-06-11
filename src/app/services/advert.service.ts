import { Injectable } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { Observable, throwError } from 'rxjs/index';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClientModule } from '@angular/common/http';
import { Fuel } from '../models/fuel';
import { Brand } from '../models/brand';
import { Model } from 'src/app/models/model';
@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  adverts: Advert[];
  advert: Advert;
  addAdvertUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/advert-add';
  AddAdvertByProIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/addAdvert';
  editAdvertUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/advert-edit';
  deleteAdvertUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/delete-advert';
  listAdvertsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/adverts';
  advertByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/advert';
  advertByGarageUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/advertsByGarage';
  advertByProUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/advertsByPro';
  countAdvertsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/adverts-number';
  filterUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/advert/filter';
  getAdvertByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/detail-advert';
  constructor(private httpClient: HttpClient) {
  }

  getAllAdverts(): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.listAdvertsUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getAdvertsById(id: number): Observable<Advert> {
    return this.httpClient.get<Advert>(this.getAdvertByIdUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getAdvertsByGarage(id: number): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.advertByGarageUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getAdvertsByPro(id: number): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.advertByProUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  addAdvert(advert: Advert, id: number): Observable<Advert> {
    return this.httpClient.post<Advert>(this.AddAdvertByProIdUrl + '/' + id, advert).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  editAdvert(advert: Advert, id: number): Observable<Advert> {
    return this.httpClient.put<Advert>(this.editAdvertUrl + '/' + id, advert).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteAdvert(id: number) {
    return this.httpClient.delete<Advert>(this.deleteAdvertUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  searchAdverts(/* fuel: string, dateImmat: number, km: number, price: number, model: string, brand: string */): Observable<Advert[]> {
    return this.httpClient.get<Advert[]>(this.filterUrl)
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
