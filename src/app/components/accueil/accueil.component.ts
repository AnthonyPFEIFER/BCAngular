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
  adverts: Advert[];

  fuels: Fuel[];
  brands: Brand[];
  brand: Brand;
  models: Model[];
  selectedAdvert: Advert;


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
  onSelectBrand(selectedBrand: Brand): void {
    this.brand = this.brand;
  }
}
