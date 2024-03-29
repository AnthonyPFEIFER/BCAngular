import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Router, ActivatedRoute } from '@angular/router';
import { Garage } from 'src/app/models/garage';
import { GarageService } from 'src/app/services/garage.service';
@Component({
  selector: 'app-pro-profil',
  templateUrl: './pro-profil.component.html',
  styleUrls: ['./pro-profil.component.scss']
})
export class ProProfilComponent implements OnInit {
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
  logout() {
    localStorage.removeItem('user');
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
