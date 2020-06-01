import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/services/garage.service';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  advert: Advert;
  adverts: Advert[];
  id: number;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private garageService: GarageService, private advertService: AdvertService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.advertService.getAdvertsById(this.id).subscribe((data: Advert) => {
      this.advert = data;
    });
  }
  deleteAdvert(advert) {
    this.advertService.deleteAdvert(this.id).subscribe(data => {
      this.advertService.getAllAdverts().subscribe((result: Advert[]) => {
        this.adverts = result;
        this.router.navigate(['/home']);
      });
    });
  }
}
