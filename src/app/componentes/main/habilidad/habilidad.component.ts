import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.scss']
})
export class HabilidadComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  habilidades: any=[];
  habilidadess: string="";
  idiomas: string="";
  lecturas: string="";
  conversacions: string="";
  porcentajelect: string="";
  porcentajeconvers: string="";

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit(): void { 
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
     console.log(bd);
    //Definir informacion a mostrar
    this.habilidades = bd.habilidades;
    this.habilidadess = bd.habilidadess;
    this.idiomas = bd.idioma;
    this.lecturas = bd.lectura;
    this.conversacions = bd.conversacion;
    this.porcentajelect = bd.porcentajelec;
    this.porcentajeconvers = bd.porcentajeconver
   });
  }

}
