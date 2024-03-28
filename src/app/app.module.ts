import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ConsoleComponent } from './console/console.component';
import { JeuComponent } from './jeu/jeu.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { EditeProduitComponent } from './edite-produit/edite-produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    BureautiqueComponent,
    ConsoleComponent,
    JeuComponent,
    TelephoneComponent,
    EditeProduitComponent,
    NewProduitComponent,
    CommandeComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
