import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonMenuButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButton, IonIcon, IonItem
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline } from 'ionicons/icons';
import { AppFooterComponent } from '../shared/components/app-footer/app-footer.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonItem,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonButton, IonIcon,
    CommonModule, FormsModule, AppFooterComponent
  ]
})
export class InicioPage implements OnInit {

  constructor() {
    // WHY: Icono de cohete para representar el inicio / despegue del proyecto.
    addIcons({ rocketOutline });
  }

  ngOnInit() {
  }

}
