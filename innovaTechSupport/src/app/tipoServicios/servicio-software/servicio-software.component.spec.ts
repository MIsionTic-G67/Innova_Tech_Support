import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioSoftwareComponent } from './servicio-software.component';

describe('ServicioSoftwareComponent', () => {
  let component: ServicioSoftwareComponent;
  let fixture: ComponentFixture<ServicioSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
