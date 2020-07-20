import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalService } from 'src/app/services/professional.service';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';
@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {

  professional: Professional;
  professionals: Professional[];
  adverts: Advert[];
  id: number;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService, private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.professionalService.getProfessionalById(this.id).subscribe((data: Professional) => {
      this.professional = data;
    });
    this.advertService.getAdvertsByPro(this.id).subscribe((data: Advert[]) => {
      this.adverts = data;
    });

  }

}
