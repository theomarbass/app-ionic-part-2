/**
 * @file informacion-personal.page.ts
 * @description Componente para mostrar la información personal del usuario.
 * 
 * WHY: Mostrar los datos del usuario de forma clara usando componentes de tarjeta (Card).
 * HOW: Importamos IonCard, IonItem y los iconos necesarios. Definimos la data de Omar Rivas.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonItem, IonIcon, 
  IonLabel, IonList, IonAvatar, IonChip
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline, locationOutline, calendarOutline, 
  heartOutline, logoGithub, mailOutline 
} from 'ionicons/icons';
import { AppFooterComponent } from '../shared/components/app-footer/app-footer.component';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonIcon, 
    IonLabel, IonList, IonAvatar, IonChip,
    CommonModule, FormsModule, AppFooterComponent
  ]
})
export class InformacionPersonalPage implements OnInit {

  constructor() {
    // WHY: Iconos descriptivos para la información personal.
    addIcons({ personOutline, locationOutline, calendarOutline, heartOutline, logoGithub, mailOutline });
  }

  ngOnInit() {
  }

}
