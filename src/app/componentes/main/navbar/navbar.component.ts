import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  logoarg: string="";

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.logoarg = bd.logoargentinaprograma;
    });
  }

}
