import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

//Importo el servicio
//import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-carouseldash',
  templateUrl: './carouseldash.component.html',
  styleUrls: ['./carouseldash.component.css']
})
export class CarouseldashComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
//carousel: any=[];
carousel: Banner[] = [];//any=[];

banner : Banner = {
  id: 0,
  carouselimag: "",
  carouselimage: "",
  carouselimagen: "",
  imageprincipal: ""
 };

  constructor(
    //private infoService: InfoService
    private sBanner:BannerService,
    private tokenService: TokenService
  ) { }

  IsLogged = false;

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.cargarBanner();
    if(this.tokenService.getToken()){
      this.IsLogged = true;
    }else{
      this.IsLogged = false;
    }
    /*
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.carouselimag = bd.carouselimag;
     this.carouselimage = bd.carouselimage;
     this.carouselimagen = bd.carouselimagen;
     this.imageprincipal = bd.imageprincipal;
    });*/
  }
  cargarBanner():void {
    this.sBanner.lista().subscribe(bd => {
      this.carousel = bd
  });
  }

  actualizarVariable(ban: Banner): void{
    this.banner =  ban;
    console.log("Funciona?")
  }

  delete(id: number){
    if(id != undefined){
      this.sBanner.delete(id).subscribe(
        bd => {
        //alerta que la Persona ha sido eliminada
        alert("Persona eliminada");
        this.cargarBanner();
    })
  }
  }

}
/*
, err =>{
      alert("No se pudo eliminar la persona");
    }
*/
