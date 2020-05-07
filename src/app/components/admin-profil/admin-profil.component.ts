import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Garage } from 'src/app/models/garage';
import { GarageService } from 'src/app/services/garage.service';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {
  professionals: Professional[];
  garages: Garage[];
  proNumber: number;
  garageNumber: number;

  constructor(private professionalService: ProfessionalService, private garageService: GarageService) { }

  ngOnInit() {
    this.professionalService.getAllProfessionals().subscribe((data: Professional[]) => {
      this.professionals = data;
      this.proNumber = this.professionals.length;
    });
    this.garageService.getAllGarages().subscribe((data: Garage[]) => {
      this.garages = data;
      this.garageNumber = this.garages.length;
    });

  }


}
