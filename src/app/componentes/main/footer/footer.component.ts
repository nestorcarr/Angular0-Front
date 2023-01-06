import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
enlacewhat: string="";
confecc: string="";
derech: string="";
enlace: string="";


  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     private infoService: InfoService,
     private httpClient: HttpClient,
     

  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.enlace = bd.enlacewhatsapp;
     this.confecc = bd.confeccion;
     this.derech = bd.derecho;
     this.enlacewhat = bd.enlacewhatsapp;
    });
  }

}
