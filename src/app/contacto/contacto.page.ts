/**
 * @file contacto.page.ts
 * @description Componente para mostrar la vista de contacto.
 * 
 * WHY: El usuario solicitó que la página sea puramente informativa en lugar de un formulario.
 * HOW: Utilizamos IonItem con iconos (logoGithub, mailOutline) para mostrar la información de contacto de forma clara y directa.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonItem, IonLabel, 
  IonIcon, IonList, IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonLabel, 
    IonIcon, IonList, IonButton,
    CommonModule
  ]
})
export class ContactoPage implements OnInit {

  constructor() {
    // WHY: Iconos representativos para los diferentes medios de contacto.
    addIcons({ mailOutline, logoGithub, logoInstagram });
  }

  ngOnInit() {
  }

}
