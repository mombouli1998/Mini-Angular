import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../Service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit{
  recherche!:string;
  ListeProduit!:Array<Produit>;
  constructor(private Ps:ProduitService, private route:Router){}
  ngOnInit(): void {
   this.Ps.listCategorie("console").subscribe({
    next:data=>{
      this.ListeProduit=data;
    },
    error(err) {
        console.log(err);
    },
   })
  }
  //recherche des produits de bureautiques
  Search() {
   this.Ps.RechercheProduit("console",this.recherche).subscribe({
    next:data=>{this.ListeProduit=data},
    error(err) {
        console.log(err);
    },
   })
    }
    //acheter le produit
    acheter(produit: Produit) {
      this.route.navigateByUrl("/commande/"+produit.id);
      }


}
