import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
npagina: string="";
disculpa: string="";
noencontrada: string="";
imageerror: string="";

  constructor(
     //Inyectar el Servicio para tener acceso en la Clase a los Metodos
     private infoService: InfoService
  ) { }

  ngOnInit(): void {
      //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
      this.infoService.getDatos().subscribe(bd => {
        console.log(bd);
       //Definir informacion a mostrar
       this.npagina = bd.nopagina;
       this.disculpa = bd.disculpas;
       this.noencontrada = bd.intentar;
       this.imageerror = bd.imgerror;

      });
  }

}
