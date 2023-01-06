import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio y se pasa al template
  mieducacion: any=[];
  mieducacions: string=""

  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     private infoService: InfoService
  ) { }

  ngOnInit(): void {
     //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
     this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar, mieducacion es la variable creada y educacion viene del Json
     this.mieducacion = bd.educacion;
     this.mieducacions = bd.educacions;
    });
  }

}
