import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/services/garage.service';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  garage: Garage;
  garages: Garage[];
  adverts: Advert[];
  id: number;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private garageService: GarageService, private advertService: AdvertService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.garageService.getGaragesById(this.id).subscribe((data: Garage) => {
      this.garage = data;
    });
    this.advertService.getAdvertsByGarage(this.id).subscribe((data: Advert[]) => {
      this.adverts = data;
    });
  }
  deleteGarage(garage) {
    this.garageService.deleteGarage(this.id).subscribe(data => {
      this.garageService.getAllGarages().subscribe((result: Garage[]) => {
        this.garages = result;
        this.router.navigate(['/home']);
      });
    });
  }
}
