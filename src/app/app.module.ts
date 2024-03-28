import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BureautiqueComponent } from './bureautique/bureautique.component';
import { ConsoleComponent } from './console/console.component';
import { JeuComponent } from './jeu/jeu.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { PanierComponent } from './panier/panier.component';
import { EditeProductComponent } from './edite-product/edite-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BureautiqueComponent,
    ConsoleComponent,
    JeuComponent,
    TelephoneComponent,
    ProduitComponent,
    NewProduitComponent,
    PanierComponent,
    EditeProductComponent,

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
