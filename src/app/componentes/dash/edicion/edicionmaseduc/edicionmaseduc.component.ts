import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edicionmaseduc',
  templateUrl: './edicionmaseduc.component.html',
  styleUrls: ['./edicionmaseduc.component.scss']
})
export class EdicionmaseducComponent implements OnInit {
  form: FormGroup;
  universidad: string = "";
  logo: string= "";
  titulo: string = '';
  institucion: string= "";
  estado: string = '';

  constructor(private formBuilder: FormBuilder, private sEducacion: EducacionService) {
    this.form = this.formBuilder.group({
      universidad: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      titulo: ["", Validators.required],
      institucion: ["", [Validators.required]],
      estado: ["", Validators.required],
   })
  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Universidad(){
  return this.form.get("universidad");
}

get Logo(){
  return this.form.get("logo");
}

get Titulo(){
  return this.form.get("titulo");
}
get Institucion(){
  return this.form.get("institucion");
}

get Estado(){
  return this.form.get("estado");
}
//Validaciones
get UniversidadValid(){
  return this.Universidad?.touched && !this.Universidad.valid;
}

get LogoValid(){
  return this.Logo?.touched && !this.Logo.valid;
}

get TituloValid(){
  return this.Titulo?.touched && !this.Titulo.valid;
}
get InstitucionValid(){
  return this.Institucion?.touched && !this.Institucion.valid;
}

get EstadoValid(){
  return this.Estado?.touched && !this.Estado.valid;
}
onCreate(): void{
  const educa = new Educacion(this.universidad, this.logo, this.titulo, this.institucion, this.estado);
  this.sEducacion.save(educa).subscribe(db => {
    alert("Educacion agregada");
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
