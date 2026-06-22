import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastController } from '@ionic/angular/standalone';
import { ContactoPage } from './contacto.page';

describe('ContactoPage', () => {
  let component: ContactoPage;
  let fixture: ComponentFixture<ContactoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPage],
      providers: [
        {
          provide: ToastController,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(
              Promise.resolve({ present: () => Promise.resolve() })
            ),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form as invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalse();
  });
});
