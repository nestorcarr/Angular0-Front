import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.scss']
})
export class BarralateralComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  //acercademiUno: any;
  datospersonales: string = '';
  laboral: string = '';
  educacions: string = '';
  habilidadess: string = '';
  proyectoss: string = '';
  
  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //this.acercademiUno = db.uno;
     //Definir informacion a mostrar, imagenprincipal es la variable creada y imageprincipal viene del Json
     this.datospersonales = bd.datospersonales;
     this.laboral = bd.laboral;
     this.educacions = bd.educacions;
     this.habilidadess= bd.habilidadess;
     this.proyectoss = bd.proyectoss;
     
    });
  }

}
