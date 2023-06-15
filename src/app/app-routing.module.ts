import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {groceryListComponent} from './components/groceryList/groceryList.component';
import { WeatherDashboardComponent } from './components/weather-dashboard/weather-dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { EditDialogComponent } from './components/EditDialog/EditDialog.component';
import { RockPaperScissorsComponent } from './components/rock-paper-scissors/rock-paper-scissors.component';


const routes: Routes = [
  {path:'groceryList', component:groceryListComponent},
  {path:'navbar', component:NavbarComponent},
  {path: `weather-dashboard`, component:WeatherDashboardComponent},
  {path:'tip-calculator', component:TipCalculatorComponent},
  {path:'edit-dialog', component:EditDialogComponent},
  {path:'rock-paper-scissors', component:RockPaperScissorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
