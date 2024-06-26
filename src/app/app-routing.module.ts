import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ConsoleComponent } from './console/console.component';
import { JeuComponent } from './jeu/jeu.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { PanierComponent } from './panier/panier.component';
import { EditeProductComponent } from './edite-product/edite-product.component';
import { CommandeComponent } from './commande/commande.component';


const routes: Routes = [
 {path:"", component:HomeComponent},
 {path:"home",component:HomeComponent},
 {path:"bureautique", component:BureautiqueComponent},
 {path:"consoles",component:ConsoleComponent},
 {path:"jeu",component:JeuComponent},
 {path:"telephone", component:TelephoneComponent},
 {path:"produit",component:ProduitComponent},
 {path:"newProduit",component:NewProduitComponent},
 {path:"panier", component:PanierComponent},
 {path:"edite/:id",component:EditeProductComponent},
 {path:"commande/:id",component:CommandeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
