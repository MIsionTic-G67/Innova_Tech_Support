import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicioSoftwareComponent } from './tipoServicios/servicio-software/servicio-software.component';
import { ServicioHardwareComponent } from './tipoServicios/servicio-hardware/servicio-hardware.component';
import { ServicioTelecomunicacionesComponent } from './tipoServicios/servicio-telecomunicaciones/servicio-telecomunicaciones.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servicio-software', component: ServicioSoftwareComponent },
  { path: 'servicio-hardware', component: ServicioHardwareComponent},
  { path: 'servicio-telecomunicaciones', component: ServicioTelecomunicacionesComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}, //Establecer redirección inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }