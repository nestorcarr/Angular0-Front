import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
//import { InfoService } from '../../../service/info/info.service';
@Component({
  selector: 'app-acercademidash',
  templateUrl: './acercademidash.component.html',
  styleUrls: ['./acercademidash.component.css']
})
export class AcercademidashComponent implements OnInit {


    //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
    personas: Persona[] = [];//any=[];
  //acercademiUno: any;
  /*nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  acerca_de_mi: string = '';
  acercademi: string = '';
*/
  persona : Persona = {
    id: 0,
    nombre: "",
    apellido: "",
    profesion: "",
    acerca_de_mi: "",
    acercademi: "",
    imageprincipal: ""
  };

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    //private infoService: InfoService
    private sPersona:PersonaService,
    private tokenService: TokenService
  ) { }

  IsLogged = false;

  ngOnInit(): void{
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.IsLogged = true;
    }else{
      this.IsLogged = false;
    }
  }
  /*ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarPersona();
    /*this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //this.acercademiUno = db.uno;
     //Definir informacion a mostrar, imagenprincipal es la variable creada y imageprincipal viene del Json
     this.nombre = bd.nombre;
     this.apellido = bd.apellido;
     this.profesion = bd.profesion;
     this.acerca_de_mi = bd.acerca_de_mi;
     this.acercademi = bd.acercademi;

    });*/
  //}*/
  cargarPersona():void {
    this.sPersona.lista().subscribe(bd => {
      this.personas = bd
  });
  }

  actualizarVariable(per: Persona): void{
    this.persona =  per;
    console.log("Funciona?")
  }

  /*delete(id: number){
    if(id != undefined){
      this.sPersona.delete(id).subscribe(
        bd => {
        //alerta que la Persona ha sido eliminada
        alert("Persona eliminada");
        this.cargarPersona();
    })
  }
  }*/

}
/*
, err =>{
      alert("No se pudo eliminar la persona");
    }*/
