import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/app/models/garage';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/services/professional.service';
import { GarageService } from 'src/app/services/garage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-garage',
  templateUrl: './edit-garage.component.html',
  styleUrls: ['./edit-garage.component.scss']
})
export class EditGarageComponent implements OnInit {

  editGarageForm: Garage;
  id: number;
  professional: Professional;
  professionals: Professional[];
  data: Professional;


  // tslint:disable-next-line: max-line-length
  constructor(private garageService: GarageService, private professionalService: ProfessionalService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.editGarageForm = new Garage();
    this.id = this.route.snapshot.params.id;
    return this.garageService.getGaragesById(this.id).subscribe((data: Garage) => {
      this.editGarageForm = data;
    });
  }
  onSubmit() {
    this.garageService.editGarage(this.editGarageForm, this.id).subscribe(data => {
      this.router.navigate(['/home']);
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
