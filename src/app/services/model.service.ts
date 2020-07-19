import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Model } from 'src/app/models/model';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  model: Model[];

  listModelsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modeles';
  modelByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modele';
  modelByBrandUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modeleByBrand';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Api-Key': 'ApiKey' })
  };
  constructor(private httpClient: HttpClient) {
    this.model = [];
  }

  getModelByBrand(id: number) {
    return this.httpClient.get<Brand[]>(this.modelByBrandUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAllModels() {
    return this.httpClient.get<Brand[]>(this.listModelsUrl)
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
