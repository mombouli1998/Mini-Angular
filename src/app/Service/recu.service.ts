import { Injectable } from '@angular/core';
import { Panier } from '../model/panier';
import jsPDF from 'jspdf';


@Injectable({
  providedIn: 'root'
})
export class RecuService {


constructor(){}
Recut(panie: Panier) {
  
  let doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('Reçu.pdf')

}


}
