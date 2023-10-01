import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        TravelComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent
    ]
})
export class AppModule { }
