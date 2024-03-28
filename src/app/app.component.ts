import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  actions=[
    {title:"Accueil" ,"router":"/home", icon:"bi bi-house"},
    {title:"Telephone" ,"router":"/telephone", icon:"bi bi-phone"},
    {title:"Bureautique" ,"router":"/bureautique", icon:"bi bi-easel2"},
    {title:"Consoles" ,"router":"/consoles", icon:"bi bi-joystick"},
    {title:"Jeux-Vidéo" ,"router":"/jeu", icon:"bi bi-dpad-fill"},
    {title:"Produit" ,"router":"/produit", icon:"bi bi-arrow-down-up"},
    {title:"New_Produit" ,"router":"/newProduit", icon:"bi bi-plus-circle"},
    {title:"" ,"router":"/panier", icon:"bi bi-basket"},
  ];
    actioncourante = this.actions[0];
    isResponsive = false;
  
    ActionC(action: any): void {
      this.actioncourante = action;
    }
  
    toggleResponsive(): void {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('responsive');
      }
    }
}
