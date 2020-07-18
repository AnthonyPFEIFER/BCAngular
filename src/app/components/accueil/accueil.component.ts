import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';
import { Fuel } from 'src/app/models/fuel';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { FuelService } from 'src/app/services/fuel.service';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  advert: Advert;
  adverts: Advert[];
  donneesSource = this.adverts;
  fuels: Fuel[];
  brands: Brand[];
  brand: Brand;
  models: Model[];


  // tslint:disable-next-line: variable-name


  // tslint:disable-next-line: max-line-length
  constructor(private advertService: AdvertService, private fuelService: FuelService, private brandService: BrandService, private modelService: ModelService) { }

  ngOnInit(): void {
    this.advertService.getAllAdverts().subscribe((data: Advert[]) => {
      this.adverts = data;
    },
      error => console.log(error));
    this.fuelService.getAllFuel().subscribe((data: Fuel[]) => {
      this.fuels = data;
    });
    this.brandService.getAllBrands().subscribe((data: Brand[]) => {
      this.brands = data;
    });
    this.modelService.getAllModels().subscribe((data: Model[]) => {
      this.models = data;
    });

  }
  OnResearch(): void {

    this.advertService.searchAdverts().subscribe((data: Advert[]) => {
      this.adverts = data;
    },
      error => console.log(error));
  }
  /*   callFiltreFuel(fuel) {
      let donneesFiltered;
      this.advertService.getAllAdverts().subscribe((data: Advert[]) => {
        this.adverts = data;
        donneesFiltered = this.donneesSource.filter(data => data.fuel === 'Diesel');
        console.log(donneesFiltered);
      });

}   */
}
