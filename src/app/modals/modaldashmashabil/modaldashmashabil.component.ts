import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-modaldashmashabil',
  templateUrl: './modaldashmashabil.component.html',
  styleUrls: ['./modaldashmashabil.component.scss']
})
export class ModaldashmashabilComponent implements OnInit {
  form: FormGroup;
  habilidad: string = '';
  porcentaje: number = 0;
  color: string = '';

  //form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService
  ) {


  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      color: ['', [Validators.required]],

  })
  }

//Definir las validaciones
get Habilidad(){
  return this.form.get("habilidad");
}
get HabilidadValid(){
  return this.Habilidad?.touched && !this.Habilidad?.valid;
}

/*get HabilidadValid(){
  return this.Habilidad?.valid;
}*/
/*get HabilidadInvalid(){
  return this.Habilidad?.touched && !this.Habilidad.valid;
}*/

get Porcentaje(){
  return this.form.get("porcentaje");
}
get Porcentajevalid(){
  return this.Porcentaje?.touched && !this.Porcentaje?.valid;
}
/*
get PorcentajeValid(){
  return this.Porcentaje?.valid;
}
get PorcentajeInvalid(){
  return this.Porcentaje?.touched && !this.Porcentaje.valid;
}*/

get Color(){
  return this.form.get("color");
}
get Colorvalid(){
  return this.Color?.touched && !this.Color?.valid;
}
/*
get ColorValid(){
  return this.Color?.valid;
}
get ColorInvalid(){
  return this.Color?.touched && !this.Color.valid;
}*/

onCreate(): void{
  const habi = new Habilidad(this.habilidad, this.porcentaje, this.color);
  this.sHabilidad.save(habi).subscribe(db => {
    alert("Fallo en la carga, intentelo nuevanente");
    window.location.reload();
  }, err=>{
    alert("Habilidad agregada");
     //this.form.reset();
     window.location.reload();

  });
}

  limpiar(): void {
    this.form.reset();
  }
  onEnviar(event:Event){
    event.preventDefault;
  if(this.form.valid){
    this.onCreate();
  }else{
    alert("fallo en la carga, intente de nuevo");
    this.form.markAllAsTouched();
  }
  }


}
