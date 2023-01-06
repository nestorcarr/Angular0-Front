import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-modaldashmaspers',
  templateUrl: './modaldashmaspers.component.html',
  styleUrls: ['./modaldashmaspers.component.scss']
})
export class ModaldashmaspersComponent implements OnInit {
  form: FormGroup;
  nombre: string = '';
  apellido: string = '';
  titulo: string = '';
  acerca_de_mi: string = '';
  acercademi: string = '';
  imageprincipal: string = '';
 // Name: any;
 //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sPersona: PersonaService
  ) { 
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      titulo: ['', Validators.required],
      acerca_de_mi: ['', Validators.required],

  })
    /*this.form= this.formBuilder.group({
         password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
         email: ['', [Validators.required, Validators.email]]
        
       })*/
  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Nombre(){
  return this.form.get("nombre");
}
get NombreValid(){
  return this.Nombre?.touched && !this.Nombre?.valid;
}

/*get HabilidadValid(){
  return this.Habilidad?.valid;
}*/
/*get HabilidadInvalid(){
  return this.Habilidad?.touched && !this.Habilidad.valid;
}*/

get Apellido(){
  return this.form.get("apellido");
}
get Apellidovalid(){
  return this.Apellido?.touched && !this.Apellido?.valid;
}
/*
get PorcentajeValid(){
  return this.Porcentaje?.valid;
}
get PorcentajeInvalid(){
  return this.Porcentaje?.touched && !this.Porcentaje.valid;
}*/

get Titulo(){
  return this.form.get("titulo");
}
get Titulovalid(){
  return this.Titulo?.touched && !this.Titulo?.valid;
}
get Acerca_de_mi(){
  return this.form.get("acerca_de_mi");
}
get Acerca_de_mivalid(){
  return this.Acerca_de_mi?.touched && !this.Acerca_de_mi?.valid;
}
/*
get ColorValid(){
  return this.Color?.valid;
}
get ColorInvalid(){
  return this.Color?.touched && !this.Color.valid;
}*/

onCreate(): void{
  const perso = new Persona(this.nombre, this.apellido, this.titulo, this.acerca_de_mi, this.acercademi, this.imageprincipal);
  this.sPersona.save(perso).subscribe(db => {
    alert("Persona agregada");
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
