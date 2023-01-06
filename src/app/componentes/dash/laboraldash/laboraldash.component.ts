import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/service/laboral.service';
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-laboraldash',
  templateUrl: './laboraldash.component.html',
  styleUrls: ['./laboraldash.component.css']
})
export class LaboraldashComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  experiencialaboral: Laboral[] = [];
  laboral : Laboral = {
  id: 0,
  empresa: "",
  logo: "",
  cargo: "",
  inicio: "",
  finalizacion: "",
  tareas: ""

};


  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     private sLaboral:LaboralService
     //private infoService: InfoService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarLaboral();
  }

  cargarLaboral():void {
    this.sLaboral.lista().subscribe(bd => {
      this.experiencialaboral = bd
  });
  }

  actualizarVariable(lab: Laboral): void{
    this.laboral =  lab;
    console.log("Funciona?");
  }


  delete(id: number){
    if(id != undefined){
      this.sLaboral.delete(id).subscribe(
        bd =>{
        //alerta que la laboral ha sido eliminada
        alert("No se pudo eliminar la laboral");
        this.cargarLaboral();
    }, error =>{
      alert("laboral eliminada");
      window.location.reload();
    })
  }
  }

}

/*
, err =>{
      alert("No se pudo eliminar la laboral");
    }*/
