import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  listModelsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modeles';
  modelByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modele';
  modelByBrandUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/modeleByBrand';
  constructor() { }
}
