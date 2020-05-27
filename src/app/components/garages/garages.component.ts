import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { Garage } from 'src/app/models/garage';

@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent implements OnInit {
  professional: Professional;
  professionals: Professional[];
  garages: Garage[];
  id: number;
  constructor() { }

  ngOnInit() {
  }

}
