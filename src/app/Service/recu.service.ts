import { Injectable } from '@angular/core';
import { Panier } from '../model/panier';
import { Produit } from '../model/produit';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class RecuService {


constructor(){}
Recut(panie: Panier) {
  let doc = new jsPDF();
  doc.save('Reçu.pdf');

}


}
