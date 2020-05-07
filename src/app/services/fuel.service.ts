import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  listFuelsUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/fuels';
  fuelByIdUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/fuel';

  constructor() { }
}
