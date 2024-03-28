import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { EditeProduitComponent } from './edite-produit/edite-produit.component';
import { CommandeComponent } from './commande/commande.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ConsoleComponent } from './console/console.component';
import { JeuComponent } from './jeu/jeu.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"produit", component:ProduitComponent},
  {path:"newProduit", component:NewProduitComponent},
  {path:"edite/:id", component:EditeProduitComponent},
  {path:"commande/:id", component:CommandeComponent},
  {path:"telephone", component:TelephoneComponent},
  {path:"bureautique", component:BureautiqueComponent},
  {path:"console", component:ConsoleComponent},
  {path:"jeu", component:JeuComponent},
  {path:"panier", component:PanierComponent},
  {path:"panier/:id", component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
