import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = new Professional();

  constructor(private professionalService: ProfessionalService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.professionalService.login(this.loginUserData.username, this.loginUserData.password).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}