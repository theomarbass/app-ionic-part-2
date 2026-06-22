/**
 * @file contacto.page.ts
 * @description Componente para mostrar información de contacto y un formulario de mensaje.
 *
 * WHY: Combinar canales directos con un formulario validado mejora la UX sin depender de backend.
 * HOW: Tarjeta informativa + formulario reactivo; el envío abre Gmail con datos codificados de forma segura.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonButton,
  IonInput,
  IonTextarea,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, logoInstagram, sendOutline } from 'ionicons/icons';
import { AppFooterComponent } from '../shared/components/app-footer/app-footer.component';

/** Destinatario fijo: nunca se toma del formulario para evitar redirección de correo. */
const CONTACT_EMAIL = 'omarrivas042@gmail.com';

const FIELD_LIMITS = {
  nombre: { min: 2, max: 100 },
  asunto: { max: 150 },
  mensaje: { min: 10, max: 2000 },
} as const;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonButton,
    IonInput,
    IonTextarea,
    AppFooterComponent,
  ],
})
export class ContactoPage implements OnInit {
  contactForm!: FormGroup;
  readonly contactEmail = CONTACT_EMAIL;

  constructor(
    private readonly fb: FormBuilder,
    private readonly toastCtrl: ToastController
  ) {
    addIcons({ mailOutline, logoGithub, logoInstagram, sendOutline });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(FIELD_LIMITS.nombre.min),
          Validators.maxLength(FIELD_LIMITS.nombre.max),
        ],
      ],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      asunto: ['', [Validators.maxLength(FIELD_LIMITS.asunto.max)]],
      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(FIELD_LIMITS.mensaje.min),
          Validators.maxLength(FIELD_LIMITS.mensaje.max),
        ],
      ],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control?.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    }
    if (control.errors['email']) {
      return 'Ingresa un correo electrónico válido.';
    }
    if (control.errors['minlength']) {
      const required = control.errors['minlength'].requiredLength;
      return `Debe tener al menos ${required} caracteres.`;
    }
    if (control.errors['maxlength']) {
      const allowed = control.errors['maxlength'].requiredLength;
      return `No puede superar ${allowed} caracteres.`;
    }

    return 'Valor no válido.';
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const nombre = this.sanitizeText(this.contactForm.value.nombre);
    const email = this.sanitizeText(this.contactForm.value.email);
    const asunto = this.sanitizeSubject(this.contactForm.value.asunto);
    const mensaje = this.sanitizeText(this.contactForm.value.mensaje);

    if (!nombre || !email || !mensaje) {
      return;
    }

    const subject = encodeURIComponent(asunto || 'Contacto desde la app');
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${subject}&body=${body}`;

    window.open(mailUrl, '_blank', 'noopener,noreferrer');

    const toast = await this.toastCtrl.create({
      message: 'Se abrió tu cliente de correo con el mensaje preparado.',
      duration: 2500,
      color: 'success',
    });
    await toast.present();

    this.contactForm.reset();
  }

  /** Elimina espacios extremos y caracteres de control no imprimibles. */
  private sanitizeText(value: unknown): string {
    if (typeof value !== 'string') {
      return '';
    }

    return value.replace(/[\x00-\x1F\x7F]/g, '').trim();
  }

  /** El asunto no admite saltos de línea (prevención de inyección en encabezados). */
  private sanitizeSubject(value: unknown): string {
    return this.sanitizeText(value).replace(/[\r\n]+/g, ' ');
  }
}
