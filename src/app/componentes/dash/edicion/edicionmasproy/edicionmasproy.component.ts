import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edicionmasproy',
  templateUrl: './edicionmasproy.component.html',
  styleUrls: ['./edicionmasproy.component.scss']
})
export class EdicionmasproyComponent implements OnInit {
  form: FormGroup;
  institucion: string = "";
  proyecto: string = "";
  profesion: string = '';
  logoproyecto: string = "";
  tema: string = "";
  temauno: string = '';
  anio: string = "";
  estado: string = "";


  constructor(
    private formBuilder: FormBuilder, private sProyecto: ProyectoService
  ) {
    this.form = this.formBuilder.group({
      institucion: ["", [Validators.required]],
      proyecto: ["", [Validators.required]],
      profesion: ["", Validators.required],
      logoproyecto: ["", [Validators.required]],
      tema: ["", [Validators.required]],
      temauno: ["", Validators.required],
      anio: ["", [Validators.required]],
      estado: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Institucion(){
  return this.form.get("institucion");
}

get Proyecto(){
  return this.form.get("proyecto");
}

get Profesion(){
  return this.form.get("profesion");
}
get Logoproyecto(){
  return this.form.get("logoproyecto");
}

get Tema(){
  return this.form.get("tema");
}

get Temauno(){
  return this.form.get("temauno");
}
get Anio(){
  return this.form.get("anio");
}

get Estado(){
  return this.form.get("estado");
}

onCreate(): void{
  const pro = new Proyecto(this.institucion, this.proyecto, this.profesion, this.logoproyecto, this.tema, this.temauno, this.anio, this.estado);
  this.sProyecto.save(pro).subscribe(db => {
    alert("Proyecto agregado");
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



//Validaciones
get InstitucionValid(){
  return this.Institucion?.touched && !this.Institucion.valid;
}

get ProyectoValid(){
  return this.Proyecto?.touched && !this.Proyecto.valid;
}

get ProfesionValid(){
  return this.Profesion?.touched && !this.Profesion.valid;
}

}
