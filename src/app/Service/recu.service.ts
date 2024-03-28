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

public Recut(panier: Panier) {
  const doc = new jsPDF();
  let jour:number=new Date().getDate();
  let moi:number=new Date().getDay();
  let annee:number=new Date().getFullYear();
  const rows: any[][] = [];
  panier.produits.forEach((produit: Produit) => {
    rows.push([produit.nom, produit.categorie,produit.prix]);
  });

  let url="https://i.goopics.net/ahazzy.jpg";
  var x = 10 ; //Position horizontale
  var y = 10 ; //Position verticale
  var largeur = 100 ; //Largeur de l’image
  var hauteur = 100 ; //Hauteur de l’image


  doc.addImage(url, 'JPEG', 10, 10, 190, 100); // Ajustez les dimensions et la position selon vos besoins
  autoTable(doc, {
    body: [
      [
        {
          content:"Entreprise",
          styles:{
            halign:"left",
            fontSize:20,
            textColor:"white",
            
          }
        },
        {
          content:"M_Trinite",
          styles:{
            halign:"right",
            fontSize:20,
            textColor:"white"
          }
        },
      ]
    ],
    theme:"plain",
    styles:{
      fillColor:"blue"
    }
  });

  autoTable(doc, {
    body: [
      [
        {
          content:"Reference : #5485248"+
          "\n"+jour+"-"+moi+"-"+annee,
          styles:{
            halign:"right",
            fontSize:10,
            textColor:"Black",
            
          }
        }
      
    ],
  ], 
  theme:"plain",
  styles:{
  fillColor:"white"
  }
});
  

  autoTable(doc, { html: '#my-table' })
  autoTable(doc, {
    head: [['Nom',  'Categorie','Prix-unitaire']],
    body: rows,
  });

  autoTable(doc, {
    body: [
      [
        {
          content:"Totale: "+panier.total+" $"+
           "\n"+jour+"-"+moi+"-"+annee,
         
          styles:{
            halign:"right",
            fontSize:10,
            textColor:"Black",
            
          }
        }
      
      ],
    ],
    theme:"plain",
    styles:{
    fillColor:"white"}
  });

  doc.save('Reçu.pdf');
}

}
