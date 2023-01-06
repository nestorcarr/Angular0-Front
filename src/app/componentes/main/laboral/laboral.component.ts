import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.scss']
})
export class LaboralComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  //acercademiUno: any;
  experiencialaboral: any=[];
  labora: string="";

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.experiencialaboral = bd.experiencialaboral;
     this.labora = bd.laboral;
     
    });
  }

}
