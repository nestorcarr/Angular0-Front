import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-modaldashmaseduc',
  templateUrl: './modaldashmaseduc.component.html',
  styleUrls: ['./modaldashmaseduc.component.scss']
})
export class ModaldashmaseducComponent implements OnInit {
  form!: FormGroup;
  universidad: string = '';
  logo: string = '';
  titulo: string = '';
  institucion: string = '';
  estado: string = '';

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sEducacion: EducacionService
  ) {
    this.form = this.formBuilder.group({
      universidad: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      estado: ['', [Validators.required]],

  })
  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Universidad(){
  return this.form.get("universidad");
}
get UniversidadValid(){
  return this.Universidad?.touched && !this.Universidad?.valid;
}

/*get UniversidadValid(){
  return this.Universidad?.valid;
}*/
/*get UniversidadInvalid(){
  return this.Universidad?.touched && !this.Universidad.valid;
}*/

get Logo(){
  return this.form.get("logoinstitucion");
}
get LogoValid(){
  return this.Logo?.touched && !this.Logo?.valid;
}
/*
get LogoinstitucionValid(){
  return this.Logoinstitucion?.valid;
}
get LogoinstitucionInvalid(){
  return this.Logoinstitucion?.touched && !this.Logoinstitucion.valid;
}*/

get Titulo(){
  return this.form.get("titulo");
}
get TituloValid(){
  return this.Titulo?.touched && !this.Titulo?.valid;
}
/*
get TituloValid(){
  return this.Titulo?.valid;
}
get TituloInvalid(){
  return this.Titulo?.touched && !this.Titulo.valid;
}*/
get Institucion(){
  return this.form.get("institucion");
}
get InstitucionValid(){
  return this.Institucion?.touched && !this.Institucion?.valid;
}
get Estado(){
  return this.form.get("estado");
}
get EstadoValid(){
  return this.Estado?.touched && !this.Estado?.valid;
}

onCreate(): void{
  const educa = new Educacion(this.universidad, this.logo, this.titulo, this.institucion, this.estado);
  this.sEducacion.save(educa).subscribe(db => {
    alert("Fallo en la carga, intentelo nuevamente");
    window.location.reload();
  }, err=>{
      alert("Educacion agregada");
      this.form.reset();
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
