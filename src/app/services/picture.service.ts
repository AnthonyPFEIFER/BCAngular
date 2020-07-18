import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictures: Picture[];

  addPictureUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/picture-add';
  pictureByAdvertUrl = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/pro/picturesByAdvert';

  constructor(private httpClient: HttpClient) {
    this.pictures = [];
  }


  addPicture(picture: File): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('picture', picture, picture.name);
    console.log(uploadData);
    return this.httpClient.post<Picture>(this.addPictureUrl, uploadData).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
