import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';


@Component({
  selector: 'app-proyectodash',
  templateUrl: './proyectodash.component.html',
  styleUrls: ['./proyectodash.component.css']
})
export class ProyectodashComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
proyectos: Proyecto[] = [];//any=[];
/*
proyectos: any=[];
proyectoss: string="";
profesions: string="";
*/
proyecto : Proyecto = {
  id: 0,
  institucion: "",
  proyecto: "",
  profesion: "",
  logoproyecto: "",
  tema: "",
  temauno: "",
  anio: "",
  estado: ""
};
  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private sProyecto:ProyectoService
    //private infoService: InfoService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarProyecto();
    /*
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.proyectos = bd.proyectos;
     this.proyectoss = bd.proyectoss;
     this.profesions = bd.profesions

    });*/
  }

  cargarProyecto():void {
    this.sProyecto.lista().subscribe(bd => {
      this.proyectos = bd
  });
  }

  actualizarVariable(pro: Proyecto): void{
    this.proyecto =  pro;
    console.log("Funciona?");
    console.log(this.proyecto);
  }

  delete(id: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        bd => {
        //alerta que el proyecto ha sido eliminada
        alert("No se pudo eliminar el proyecto");
        this.cargarProyecto();
  }, error =>{
        alert("Proyecto eliminado");
        window.location.reload();

      })
    }
  }
}


/*
, err =>{
      alert("No se pudo eliminar el proyecto");
    }*/
