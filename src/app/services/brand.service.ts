import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  listBrandsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/brands';
  brandByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/brand';
  constructor() { }
}
