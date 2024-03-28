import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../Service/produit.service';
import { PanierService } from '../Service/panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  products:Array<Produit>=[];
  ImageProduit:any;
  productId:any;
  produitForm!:FormGroup
  produitModif!:Produit;
  constructor( private active: ActivatedRoute, private PS:ProduitService, private form:FormBuilder, private route: Router, private panier: PanierService){}
  ngOnInit(): void {
   this.productId=this.active.snapshot.params['id'];
   this.PS.getProduit(this.productId).subscribe({
    next:data=>{
      this.produitForm=this.form.group({
        id: this.form.control(data.id),
        nom: this.form.control({value:data.nom,disabled:true}),
        prix: this.form.control({value:data.prix,disabled:true}),
        checked: this.form.control({value:data.checked,disabled:true}),
        image: this.form.control(data.image),
        quantite: this.form.control({value:data.quantite,disabled:true}),
        Description:this.form.control({value:data.Description,disabled:true})
      });
      this.ImageProduit=data.image;
      this.produitModif=data;
    }
   })
   }
   //achat du produit
  Acheter() {
    this.produitModif.quantite= this.produitModif.quantite-1;
    this.PS.Modifie( this.produitModif).subscribe({
      next:data=>{
        alert("produit ajouter au panier");
      },
      error(err) {
          console.log(err);
      },
    });
      
    this.route.navigateByUrl("/home")
  // this.reçu.Recu(this.produitModif);
   this.panier.addPanier(this.produitModif);
  }

}
