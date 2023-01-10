import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-habilidaddash',
  templateUrl: './habilidaddash.component.html',
  styleUrls: ['./habilidaddash.component.css']
})
export class HabilidaddashComponent implements OnInit {
  habilidades: Habilidad[] = [];//any=[];
  //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
   /*habilidades: any=[];
   habilidadess: string="";
   idiomas: string="";
   lecturas: string="";
   conversacions: string="";
   porcentajelect: string="";
   porcentajeconvers: string="";
*/
  habilidad : Habilidad = {
   id: 0,
   habilidad: "",
   porcentaje: 0,
   color: ""
  };

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    //private infoService: InfoService
    private sHabilidad:HabilidadService
  ) { }

  ngOnInit() {
    this.cargarHabilidad();
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    /*this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.habilidades = bd.habilidades;
     this.habilidadess = bd.habilidadess;
     this.idiomas = bd.idioma;
     this.lecturas = bd.lectura;
     this.conversacions = bd.conversacion;
     this.porcentajelect = bd.porcentajelec;
     this.porcentajeconvers = bd.porcentajeconver
    });*/
  }

  cargarHabilidad():void {
    this.sHabilidad.lista().subscribe(bd => {
      this.habilidades = bd
  });
  }

  actualizarVariable(hab: Habilidad): void{
    this.habilidad =  hab;
    console.log("Funciona?")
  }

  delete(id: number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        bd =>{
        //alerta que la habilidad ha sido eliminada
        alert("Habilidad eliminada");
        this.cargarHabilidad();
    }, error =>{
      alert("No se pudo eliminar la habilidad");
     
      window.location.reload();

    })
  }
  }

}
/*
, err =>{
  alert("No se pudo eliminar la habilidad");
}*/
