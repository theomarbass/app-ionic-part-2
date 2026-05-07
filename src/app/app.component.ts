/**
 * @file app.component.ts
 * @description Componente raíz de la aplicación que configura el menú lateral y la navegación.
 * 
 * WHY: Necesitamos importar todos los módulos de Ionic Standalone para que el menú lateral
 * (ion-menu, ion-header, etc.) y la navegación por routerLink funcionen correctamente.
 * 
 * HOW: Se importan y se inyectan en el array `imports` del decorador @Component.
 */
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp, 
    IonRouterOutlet, 
    IonMenu, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonIcon, 
    IonLabel,
    RouterLink,
    RouterLinkActive
  ],
})
export class AppComponent {
  constructor() {
    // WHY: Agregamos los íconos de forma global para usarlos en el menú lateral.
    // HOW: Usando addIcons de 'ionicons'.
    addIcons({ homeOutline, personOutline, mailOutline });
  }
}
