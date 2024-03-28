import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ConsoleComponent } from './console/console.component';


const routes: Routes = [
 // {path:"", component:HomeComponent},
 {path:"home",component:HomeComponent},
 {path:"bureautique", component:BureautiqueComponent},
 {path:"consoles",component:ConsoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
