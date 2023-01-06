import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edicionmashab',
  templateUrl: './edicionmashab.component.html',
  styleUrls: ['./edicionmashab.component.scss']
})
export class EdicionmashabComponent implements OnInit {
  form: FormGroup;
  habilidad: string = "";
  porcentaje: number = 0;
  color: string = '';

  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) {
    this.form = this.formBuilder.group({
      habilidad: ["", [Validators.required]],
      porcentaje: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      color: ["", Validators.required],

  })


   }

  ngOnInit(): void {
  }
//Definir las validaciones
get Habilidad(){
  return this.form.get("habilidad");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}

get Color(){
  return this.form.get("color");
}
//Validaciones
get HabilidadValid(){
  return this.Habilidad?.touched && !this.Habilidad.valid;
}

get PorcentajeValid(){
  return this.Porcentaje?.touched && !this.Porcentaje.valid;
}

get ColorValid(){
  return this.Color?.touched && !this.Color.valid;
}

onCreate(): void{
  const habi = new Habilidad(this.habilidad, this.porcentaje, this.color);
  this.sHabilidad.save(habi).subscribe(db => {
    alert("Habilidad agregada");
    window.location.reload();
  }, err=>{
      alert("Fallo en la carga, intentelo nuevanente");
      this.form.reset();

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
