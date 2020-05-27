import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = new Professional();
  public loginAdminData = new Admin();

  constructor(private professionalService: ProfessionalService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  /*   onSubmit(id) {
      if (this.professionalService.getProfessionalByUsername(this.loginUserData.username) != null) {
        this.professionalService.login(this.loginUserData.username, this.loginUserData.password).subscribe(user => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            console.log(JSON.parse(localStorage.getItem('user')));
            this.router.navigate(['/home']);
            location.reload();
          } else {
            alert('Votre nom/mot de passe est incorrect !');
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      } else {
        // Do something
      }
    } */
  onSubmit() {
    this.professionalService.login(this.loginUserData.username, this.loginUserData.password).subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('user')));
        this.router.navigate(['/home']);
        location.reload();
      } else {
        alert('Votre nom/mot de passe est incorrect !');
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }

    });
  }
  onSubmitAdmin() {
    this.adminService.login(this.loginAdminData.username, this.loginAdminData.password).subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('user')));
        this.router.navigate(['/home']);
        location.reload();
      } else {
        alert('Votre nom/mot de passe est incorrect !');
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }

    });
  }
}
