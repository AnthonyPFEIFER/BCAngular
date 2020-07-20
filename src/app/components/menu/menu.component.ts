import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private professionalService: ProfessionalService, private router: Router) { }
  currentUser = null;
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  onSubmit() {
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
