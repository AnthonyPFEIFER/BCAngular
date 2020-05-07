import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginURL = 'http://localhost/Symfony/BusinessCaseApi/public/index.php/admin/login';
  constructor() { }
}
