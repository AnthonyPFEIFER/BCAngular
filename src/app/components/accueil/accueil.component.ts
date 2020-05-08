import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { AdvertService } from 'src/app/services/advert.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  adverts: Advert[];

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.advertService.getAllAdverts().subscribe((data: Advert[]) => {
      this.adverts = data;
    },
      error => console.log(error));
  }

}
