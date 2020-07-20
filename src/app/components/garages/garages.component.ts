import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { Garage } from 'src/app/models/garage';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalService } from 'src/app/services/professional.service';
import { GarageService } from 'src/app/services/garage.service';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.scss']
})
export class GaragesComponent implements OnInit {
  professional: Professional;
  professionals: Professional[];
  garages: Garage[];
  id: number;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService, private garageService: GarageService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.professional = data;
    });
    this.garageService.getGaragesByPro(this.id).subscribe((data: Garage[]) => {
      this.garages = data;
    });
  }

}
