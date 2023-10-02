import { Component } from '@angular/core';
import { Country } from './models/country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 countryArray: Country[]=[
  {id: 1,name: "Brasil",capital:"Brasilia",lat: 2000,lng: 1000},
  {id: 2,name: "Colombia",capital:"Bogota",lat: 3000,lng: 100},
  {id: 3,name: "Ecuador",capital:"Quito",lat: 2780,lng: 1045},
  {id: 4,name: "Venezuela",capital:"Caracas",lat: 2400,lng: 1600},
 ];
}
