import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { Garage } from 'src/app/models/garage';
import { AdvertService } from 'src/app/services/advert.service';
import { GarageService } from 'src/app/services/garage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Fuel } from 'src/app/models/fuel';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { FuelService } from 'src/app/services/fuel.service';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-edit-advert',
  templateUrl: './edit-advert.component.html',
  styleUrls: ['./edit-advert.component.css']
})
export class EditAdvertComponent implements OnInit {

  editAdvertForm: Advert;
  id: number;
  garage: Garage;
  garages: Garage[];
  fuels: Fuel[];
  brands: Brand[];
  models: Model[];
  data: Garage;

  // tslint:disable-next-line: max-line-length
  constructor(private advertService: AdvertService, private garageService: GarageService, private fuelService: FuelService, private brandService: BrandService, private modelService: ModelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editAdvertForm = new Advert();
    this.id = this.route.snapshot.params.id;
    this.advertService.getAdvertsById(this.id).subscribe((data: Advert) => {
      this.editAdvertForm = data;
    });
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
  onSubmit() {
    this.advertService.editAdvert(this.editAdvertForm, this.id).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
