import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
actioncourante: any;

  actions:Array<any>=[
    {title:"Accueil" ,"router":"/home", icon:"bi bi-house"},
    //{title:"Telephone" ,"router":"/telephone", icon:"bi bi-phone"},
    {title:"Bureautique" ,"router":"/bureautique", icon:"bi bi-easel2"},
    {title:"Consoles" ,"router":"/consoles", icon:"bi bi-joystick"},
    //{title:"Jeux-Vidéo" ,"router":"/imprimante", icon:"bi bi-dpad-fill"},
    //{title:"Produit" ,"router":"/produit", icon:"bi bi-arrow-down-up"},
    //{title:"New_Produit" ,"router":"/newProduit", icon:"bi bi-plus-circle"},
   // {title:"" ,"router":"/panier", icon:"bi bi-basket"},
  ]
  ActionC(_t7: any) {
    this.actioncourante=_t7;

    }
}
