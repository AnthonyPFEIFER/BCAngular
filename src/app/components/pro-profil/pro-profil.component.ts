import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Professional } from 'src/app/models/professional';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pro-profil',
  templateUrl: './pro-profil.component.html',
  styleUrls: ['./pro-profil.component.css']
})
export class ProProfilComponent implements OnInit {
  professional: Professional;
  professionals: Professional[];
  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService, private router: Router) { }

  ngOnInit(): void {


  }

}