import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVideojuegoComponent } from './formulario-videojuego.component';

describe('FormularioVideojuegoComponent', () => {
  let component: FormularioVideojuegoComponent;
  let fixture: ComponentFixture<FormularioVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
