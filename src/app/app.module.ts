import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { InfoService} from './service/info/info.service';
//analizar si los service van o si se sacan tambien de providers
import { AuthService } from './service/auth.service';
import { BannerService } from './service/banner.service';
import { EducacionService } from './service/educacion.service';
import { GuardGuard } from './service/guard.guard';
import { HabilidadService } from './service/habilidad.service';
//import { authInterceptorProviders, InterceptorService } from './service/interceptor.service';
import { InterceptorService } from './service/interceptor.service';
import { LaboralService } from './service/laboral.service';
import { PersonaService } from './service/persona.service';
import { ProyectoService } from './service/proyecto.service';
import { TokenService } from './service/token.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarralateralComponent } from './componentes/dash/barralateral/barralateral.component';
import { CarouselComponent } from './componentes/main/carousel/carousel.component';
import { DashboardComponent } from './componentes/dash/dashboard/dashboard.component';
import { EducacionComponent } from './componentes/main/educacion/educacion.component';
import { ErrorComponent } from './componentes/main/error/error.component';
import { FooterComponent } from './componentes/main/footer/footer.component';
import { HabilidadComponent } from './componentes/main/habilidad/habilidad.component';
import { IndexComponent } from './componentes/main/index/index.component';
import { LaboralComponent } from './componentes/main/laboral/laboral.component';
import { LogiinComponent } from './componentes/main/logiin/logiin.component';
import { LogoutComponent } from './componentes/dash/logout/logout.component';
import { ModalNavbarComponent } from './modals/modal-navbar/modal-navbar.component';
import { NavbarComponent } from './componentes/main/navbar/navbar.component';
import { NavbardashComponent } from './componentes/dash/navbardash/navbardash.component';
import { ProyectoComponent } from './componentes/main/proyecto/proyecto.component';
import { RedesComponent } from './componentes/main/redes/redes.component';
import { AcercademiComponent } from './componentes/main/acercademi/acercademi.component';
import { RedesdashComponent } from './componentes/dash/redesdash/redesdash.component';
import { CarouseldashComponent } from './componentes/dash/carouseldash/carouseldash.component';
import { AcercademidashComponent } from './componentes/dash/acercademidash/acercademidash.component';
import { EdicionmasComponent } from './componentes/dash/edicion/edicionmas/edicionmas.component';
import { LaboraldashComponent } from './componentes/dash/laboraldash/laboraldash.component';
import { EducaciondashComponent } from './componentes/dash/educaciondash/educaciondash.component';
import { HabilidaddashComponent } from './componentes/dash/habilidaddash/habilidaddash.component';
import { ProyectodashComponent } from './componentes/dash/proyectodash/proyectodash.component';
import { ModalcambiarComponent } from './modals/modalcambiar/modalcambiar.component';
import { ModaleditarComponent } from './modals/modaleditar/modaleditar.component';
import { ModaleditardashComponent } from './modals/modaleditardash/modaleditardash.component';
import { ModaldashedicionpersComponent } from './modals/modaldashedicionpers/modaldashedicionpers.component';
import { ModaldashedicionlabComponent } from './modals/modaldashedicionlab/modaldashedicionlab.component';
import { ModaldashedicioneducComponent } from './modals/modaldashedicioneduc/modaldashedicioneduc.component';
import { ModaldashedicionhabComponent } from './modals/modaldashedicionhab/modaldashedicionhab.component';
import { ModaldashedicionproyComponent } from './modals/modaldashedicionproy/modaldashedicionproy.component';
import { EdicionmaslabComponent } from './componentes/dash/edicion/edicionmaslab/edicionmaslab.component';
import { EdicionmaseducComponent } from './componentes/dash/edicion/edicionmaseduc/edicionmaseduc.component';
import { EdicionmashabComponent } from './componentes/dash/edicion/edicionmashab/edicionmashab.component';
import { EdicionmasproyComponent } from './componentes/dash/edicion/edicionmasproy/edicionmasproy.component';
import { ModalnavbardashComponent } from './modals/modalnavbardash/modalnavbardash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalfooterComponent } from './modals/modalfooter/modalfooter.component';
import { ModaldashmaspersComponent } from './modals/modaldashmaspers/modaldashmaspers.component';
import { ModaldashmaslabComponent } from './modals/modaldashmaslab/modaldashmaslab.component';
import { ModaldashmaseducComponent } from './modals/modaldashmaseduc/modaldashmaseduc.component';
import { ModaldashmashabilComponent } from './modals/modaldashmashabil/modaldashmashabil.component';
import { ModaldashmasproyComponent } from './modals/modaldashmasproy/modaldashmasproy.component';



@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    CarouselComponent,
    DashboardComponent,
    EducacionComponent,
    ErrorComponent,
    FooterComponent,
    HabilidadComponent,
    IndexComponent,
    LaboralComponent,
    LogiinComponent,
    LogoutComponent,
    ModalNavbarComponent,
    NavbarComponent,
    NavbardashComponent,
    ProyectoComponent,
    RedesComponent,
    AcercademiComponent,
    RedesdashComponent,
    CarouseldashComponent,
    AcercademidashComponent,
    EdicionmasComponent,
    LaboraldashComponent,
    EducaciondashComponent,
    HabilidaddashComponent,
    ProyectodashComponent,
    ModalcambiarComponent,
    ModaleditarComponent,
    ModaleditardashComponent,
    ModaldashedicionpersComponent,
    ModaldashedicionlabComponent,
    ModaldashedicioneducComponent,
    ModaldashedicionhabComponent,
    ModaldashedicionproyComponent,
    EdicionmaslabComponent,
    EdicionmaseducComponent,
    EdicionmashabComponent,
    EdicionmasproyComponent,
    ModalnavbardashComponent,
    ModalfooterComponent,
    ModaldashmaspersComponent,
    ModaldashmaslabComponent,
    ModaldashmaseducComponent,
    ModaldashmashabilComponent,
    ModaldashmasproyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InfoService, AuthService, BannerService, EducacionService, GuardGuard, HabilidadService, LaboralService, InterceptorService, LaboralService, PersonaService, ProyectoService, TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
