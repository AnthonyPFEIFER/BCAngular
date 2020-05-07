import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionalService } from 'src/app/services/professional.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
