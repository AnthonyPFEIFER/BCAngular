import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from 'src/app/services/garage.service';
import { AdvertService } from 'src/app/services/advert.service';
import { PictureService } from 'src/app/services/picture.service';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  advert = new Advert();
  adverts: Advert[];
  picture = new Picture();
  pictures: Picture[];
  id: number;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private garageService: GarageService, private advertService: AdvertService, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.advertService.getAdvertsById(this.id).subscribe((data: Advert) => {
      this.advert = data;
    });
    this.pictureService.getPictureByAdvertId(this.id).subscribe((data: Picture[]) => {
      this.pictures = data;
    });
    console.log(this.advert);
    setTimeout(() => {
      console.log(this.advert);
    }, 2000);
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
