import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { GarageService } from 'src/app/services/garage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/services/professional.service';
@Component({
  selector: 'app-add-garage',
  templateUrl: './add-garage.component.html',
  styleUrls: ['./add-garage.component.scss']
})
export class AddGarageComponent implements OnInit {
  garageForm: Garage;
  professionals: Professional[];
  professional: Professional;
  id: number;

  // tslint:disable-next-line: max-line-length
  constructor(private garageService: GarageService, private router: Router, private professionalService: ProfessionalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.professional = data;
    });
    this.garageForm = new Garage();

  }
  onSubmit() {
    this.garageService.addGarage(this.garageForm, this.id).subscribe(data => {
      setTimeout(() => {
        this.router.navigate(['/pro-profil/', this.professional.id]);
      }, 1000);
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }

}

