import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVideojuegoComponent } from './tabla-videojuego.component';

describe('TablaVideojuegoComponent', () => {
  let component: TablaVideojuegoComponent;
  let fixture: ComponentFixture<TablaVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
