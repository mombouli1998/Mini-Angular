import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';


const routes: Routes = [
 // {path:"", component:HomeComponent},
 {path:"home",component:HomeComponent},
 {path:"bureautique", component:BureautiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
