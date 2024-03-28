import { Component } from '@angular/core';
import { Panier } from '../model/panier';
import { PanierService } from '../Service/panier.service';
import { RecuService } from '../Service/recu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panie!: Panier;
  total!: number;
  constructor(private shop: PanierService,private recu:RecuService, private route:Router) { }

  ngOnInit(): void {
    this.getPanier();
  }
  public getPanier(){
    this.shop.shopObservable.subscribe(panier => {
      this.panie = panier;
   
    });
    this.total=this.panie.total.toNumber();
  }
  acheter() {
   // this.recu.Recut(this.panie);
   alert("commande en cours");
   this.route.navigateByUrl("/home")
    }
    Delete(arg0: any) {
    this.shop.delete(arg0);
    this.getPanier();
      }

}
