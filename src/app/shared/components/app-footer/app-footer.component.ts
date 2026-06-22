/**
 * @file app-footer.component.ts
 * @description Pie de página reutilizable para todas las vistas principales.
 *
 * WHY: Centralizar el copyright evita duplicación y mantiene consistencia visual.
 * HOW: Componente standalone con ion-footer e ion-toolbar translúcido.
 */
import { Component } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonFooter, IonToolbar, IonTitle],
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
})
export class AppFooterComponent {}
