import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../Service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ListeProduit:Array<Produit>=[];
  recherche!:string;
    constructor(private ps:ProduitService, private route:Router){}
    ngOnInit(): void {
     this.ps.ListeProduits().subscribe({
      next:data=>{
        this.ListeProduit=data;
      },
      error(err) {
          console.log(err);
      },
     })
    }
    //Recherche produit
    Search() {
      this.ps.Recherche(this.recherche.toLowerCase()).subscribe({
        next:data=>{this.ListeProduit=data},
        error(err) {
            console.log(err);
        },
      })   
    }
    //acheter produit
    acheter(produit: Produit) {
      this.route.navigateByUrl("/commande/"+produit.id);
      }
}
