import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }
  currentUser = null;
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log('currentUser', this.currentUser);
  }

}
