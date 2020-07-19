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
import { PictureService } from 'src/app/services/picture.service';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.css']
})
export class AddAdvertsComponent implements OnInit {

  addAdvertForm: Advert;
  addPictureForm: Picture;
  professional: Professional;
  fuels: Fuel[];
  brands: Brand[];
  models: Model[];
  garages: Garage[];
  id: number;
  selectedFile: File;

  // tslint:disable-next-line: max-line-length
  constructor(private advertService: AdvertService, private professionalService: ProfessionalService, private fuelService: FuelService, private brandService: BrandService, private modelService: ModelService, private garageService: GarageService, private router: Router, private route: ActivatedRoute, private pictureService: PictureService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.professional = data;
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
    this.garageService.getGaragesByPro(this.id).subscribe((data: Garage[]) => {
      this.garages = data;
    });

    this.addAdvertForm = new Advert();
    this.addPictureForm = new Picture();
  }

  onSubmit() {
    this.advertService.addAdvert(this.addAdvertForm, this.id).subscribe(data => {
      this.router.navigate(['/pro-profil' + '/' + this.id]);
    });

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0] as File;
    this.onUpload();
  }

  onUpload() {
    const uploadData = new FormData();
    this.pictureService.addPicture(this.selectedFile)
      .subscribe(event => {
        this.addAdvertForm.picture = event.file;
      });
  }
}
