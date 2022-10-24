import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHardwareComponent } from './servicio-hardware.component';

describe('ServicioHardwareComponent', () => {
  let component: ServicioHardwareComponent;
  let fixture: ComponentFixture<ServicioHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
