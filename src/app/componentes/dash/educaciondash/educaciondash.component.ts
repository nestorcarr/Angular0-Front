import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-educaciondash',
  templateUrl: './educaciondash.component.html',
  styleUrls: ['./educaciondash.component.css']
})
export class EducaciondashComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio y se pasa al template
mieducacion: Educacion[] = [];

educacion : Educacion = {
  id: 0,
  universidad: "",
  logo: "",
  titulo: "",
  institucion: "",
  estado: ""
};

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private sEducacion:EducacionService

  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarEducacion();

  }

  cargarEducacion():void {
    this.sEducacion.lista().subscribe(bd => {
      this.mieducacion = bd
  });
  }

  actualizarVariable(edu: Educacion): void{
    this.educacion =  edu;
    console.log("Funciona?");
    console.log(edu);
  }

  delete(id: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        bd => {
        //alerta que la habilidad ha sido eliminada
        alert("No se pudo eliminar la educacion");
        this.cargarEducacion();
    }, error =>{
      alert("Educacion eliminada");
      window.location.reload();
    })
  }
}

}

/*
, err =>{
      alert("No se pudo eliminar la educacion");
    }
*/
