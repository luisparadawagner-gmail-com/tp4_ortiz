import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralVideojuegoComponent } from './central-videojuego.component';

describe('CentralVideojuegoComponent', () => {
  let component: CentralVideojuegoComponent;
  let fixture: ComponentFixture<CentralVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
