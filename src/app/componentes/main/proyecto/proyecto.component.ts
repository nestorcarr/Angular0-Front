import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  proyectos: any=[];
  proyectoss: string="";

  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     private infoService: InfoService
  ) { }

  ngOnInit(): void {
         //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
         this.infoService.getDatos().subscribe(bd => {
          console.log(bd);
         //Definir informacion a mostrar
         this.proyectos = bd.proyectos;
         this.proyectoss = bd.proyectoss;

        });
  }

}
