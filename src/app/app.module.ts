import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { groceryListComponent } from './components/groceryList/groceryList.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditDialogComponent } from './components/EditDialog/EditDialog.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { RockPaperScissorsComponent } from './components/rock-paper-scissors/rock-paper-scissors.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { WeatherDashboardComponent } from './components/weather-dashboard/weather-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {WeatherService} from './components/weather-dashboard/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    groceryListComponent,
    EditDialogComponent,
    TipCalculatorComponent,
    RockPaperScissorsComponent,
    WeatherDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }