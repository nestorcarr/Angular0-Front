import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
//carousel: any=[];
carouselimag: any="";
carouselimage: any="";
carouselimagen: any="";

  constructor(
//Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.carouselimag = bd.carouselimag;
     this.carouselimage = bd.carouselimage;
     this.carouselimagen = bd.carouselimagen;
    });
  }

}
