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
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  IonLabel,
  MenuController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, mailOutline } from 'ionicons/icons';
import { filter } from 'rxjs/operators';

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
  constructor(
    private readonly menuCtrl: MenuController,
    private readonly router: Router
  ) {
    addIcons({ homeOutline, personOutline, mailOutline });

    // WHY: Al elegir una sección, el menú debe cerrarse para ver solo el contenido.
    // HOW: Cerramos el menú overlay en cada NavigationEnd.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        void this.menuCtrl.close();
      });
  }
}
