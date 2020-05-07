import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {
  professionalForm: Professional;
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  siret: string;

  constructor(private professionalService: ProfessionalService, private router: Router) { }

  ngOnInit() {
    this.professionalForm = new Professional();

    this.username = this.professionalService.username;
    this.password = this.professionalService.password;
    this.firstname = this.professionalService.firstname;
    this.lastname = this.professionalService.lastname;
    this.email = this.professionalService.email;
    this.tel = this.professionalService.tel;
    this.siret = this.professionalService.siret;
  }
  onSubmit() {
    this.professionalService.add(this.professionalForm).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
