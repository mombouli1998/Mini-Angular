import { Component } from '@angular/core';
import { Panier } from '../model/panier';
import { PanierService } from '../Service/panier.service';
import { RecuService } from '../Service/recu.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  panie!: Panier;
  total!: number;
  constructor(private shop: PanierService,private recu:RecuService) { }

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
    }
    Delete(arg0: any) {
    this.shop.delete(arg0);
    this.getPanier();
      }

}
