import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edicionmas',
  templateUrl: './edicionmas.component.html',
  styleUrls: ['./edicionmas.component.css']
})
export class EdicionmasComponent implements OnInit {
  form: FormGroup;
  nombre: string = "";
  apellido: string = "";
  profesion: string = "";
  acerca_de_mi: string = "";
  acercademi: string = "";
  imageprincipal: string = "";


  constructor(private formBuilder: FormBuilder, private sPersona: PersonaService) { 
    this.form = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", Validators.required],
      profesion: ["", Validators.required],
      acerca_de_mi: ["", Validators.required],
      acercademi: ["", Validators.required],
      imageprincipal: ["", Validators.required],

  })


  }

  ngOnInit() {
  }
//Definir las validaciones
get Nombre(){
  return this.form.get("nombre");
}

get Apellido(){
  return this.form.get("apellido");
}

get Profesion(){
  return this.form.get("profesion");
}
get Acerca_de_mi(){
  return this.form.get("acerca_de_mi");
}

get Acercademi(){
  return this.form.get("acercademi");
}

get Imageprincipal(){
  return this.form.get("imageprincipal");
}
//Validaciones
get NombreValid(){
  return this.Nombre?.touched && !this.Nombre.valid;
}

get ApellidoValid(){
  return this.Apellido?.touched && !this.Apellido.valid;
}

get ProfesionValid(){
  return this.Profesion?.touched && !this.Profesion.valid;
}
get Acerca_de_miValid(){
  return this.Acerca_de_mi?.touched && !this.Acerca_de_mi.valid;
}

get AcercademiValid(){
  return this.Acercademi?.touched && !this.Acercademi.valid;
}

get ImageprincipalValid(){
  return this.Imageprincipal?.touched && !this.Imageprincipal.valid;
}
onCreate(): void{
  const habi = new Persona(this.nombre, this.apellido, this.profesion, this.acerca_de_mi, this.acercademi, this.imageprincipal);
  this.sPersona.save(habi).subscribe(db => {
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
