import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  addPictureUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/picture-add';
  pictureByAdvertUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/picturesByAdvert';
  constructor() { }
}
