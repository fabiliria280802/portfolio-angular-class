import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelingLocationComponent } from '../traveling-location/traveling-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TravelingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-traveling-location></app-traveling-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
