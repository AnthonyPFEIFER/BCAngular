import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Garage } from 'src/app/models/garage';
import { GarageService } from 'src/app/services/garage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {
  professional: Professional;
  professionals: Professional[];
  id: number;
  garages: Garage[];
  proNumber: number;
  garageNumber: number;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private professionalService: ProfessionalService, private garageService: GarageService) { }

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
  deleteProfessional(id: number) {
    this.professionalService.deletePro(id).subscribe(data => {
      this.professionalService.getAllProfessionals().subscribe((result: Professional[]) => {
        this.professionals = result;
        this.router.navigate(['/profil-admin']);
      });
    });
  }
}
