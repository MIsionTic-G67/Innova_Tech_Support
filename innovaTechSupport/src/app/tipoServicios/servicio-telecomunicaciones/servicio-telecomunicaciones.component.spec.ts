import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTelecomunicacionesComponent } from './servicio-telecomunicaciones.component';

describe('ServicioTelecomunicacionesComponent', () => {
  let component: ServicioTelecomunicacionesComponent;
  let fixture: ComponentFixture<ServicioTelecomunicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioTelecomunicacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioTelecomunicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
