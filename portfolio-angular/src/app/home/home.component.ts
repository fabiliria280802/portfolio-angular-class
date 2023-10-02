import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";
import { CommonModule } from '@angular/common';
import { TravelingLocationComponent } from '../traveling-location/traveling-location.component';

@Component({
  selector: 'app-home',
  //standalone: true,
  //imports: [CommonModule, TravelingLocationComponent],
  templateUrl: "./home.component.html",
  /*template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-traveling-location></app-traveling-location>
  </section>
  `,*/
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public userService: UsersService) {}
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}
