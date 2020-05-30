import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { Professional } from 'src/app/models/professional';
import { Fuel } from 'src/app/models/fuel';
import { Brand } from 'src/app/models/brand';
import { Garage } from 'src/app/models/garage';
import { Model } from 'src/app/models/model';
import { GarageService } from 'src/app/services/garage.service';
import { AdvertService } from 'src/app/services/advert.service';
import { ProfessionalService } from 'src/app/services/professional.service';
import { FuelService } from 'src/app/services/fuel.service';
import { BrandService } from 'src/app/services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.css']
})
export class AddAdvertsComponent implements OnInit {

  addAdvertForm: Advert;
  professional: Professional;
  fuel: Fuel[];
  brand: Brand[];
  model: Model[];
  garage: Garage[];
  id: number;

  // tslint:disable-next-line: max-line-length
  constructor(private advertService: AdvertService, private professionalService: ProfessionalService, private fuelService: FuelService, private brandService: BrandService, private modelService: ModelService, private garageService: GarageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.professional = data;
    });
    this.fuelService.getAllFuel().subscribe((data: Fuel[]) => {
      this.fuel = data;
    });
    this.brandService.getAllBrands().subscribe((data: Brand[]) => {
      this.brand = data;
    });
    this.modelService.getAllModels().subscribe((data: Model[]) => {
      this.model = data;
    });
    this.garageService.getGaragesByPro(this.id).subscribe((data: Garage[]) => {
      this.garage = data;
    });

    this.addAdvertForm = new Advert();
  }

  onSubmit() {
    this.advertService.addAdvert(this.addAdvertForm, this.id).subscribe(data => {
      this.router.navigate(['/pro-profil' + '/' + this.id]);
    });
  }
}
