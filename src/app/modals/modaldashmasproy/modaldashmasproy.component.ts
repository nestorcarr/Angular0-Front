import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-modaldashmasproy',
  templateUrl: './modaldashmasproy.component.html',
  styleUrls: ['./modaldashmasproy.component.scss']
})
export class ModaldashmasproyComponent implements OnInit {
  form: FormGroup;
  institucion: string = '';
  proyecto: string = "";
  profesion: string = '';
  logoproyecto: string = '';
  tema: string = "";
  temauno: string = '';
  anio: string = '';
  estado: string = "";


  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sProyecto: ProyectoService
  ) {
    this.form = this.formBuilder.group({
      institucion: ['', [Validators.required]],
      proyecto: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      logoproyecto: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      temauno: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Institucion(){
  return this.form.get("institucion");
}
get InstitucionValid(){
  return this.Institucion?.touched && !this.Institucion?.valid;
}

/*get HabilidadValid(){
  return this.Habilidad?.valid;
}*/
/*get HabilidadInvalid(){
  return this.Habilidad?.touched && !this.Habilidad.valid;
}*/

get Proyecto(){
  return this.form.get("proyecto");
}
get Proyectvalid(){
  return this.Proyecto?.touched && !this.Proyecto?.valid;
}
get Profesion(){
  return this.form.get("profesion");
}
get Profesionvalid(){
  return this.Profesion?.touched && !this.Profesion?.valid;
}
get Logoproyecto(){
  return this.form.get("logoproyecto");
}
get Logoproyectovalid(){
  return this.Logoproyecto?.touched && !this.Logoproyecto?.valid;
}
get Tema(){
  return this.form.get("tema");
}
get Temavalid(){
  return this.Tema?.touched && !this.Tema?.valid;
}
get Temauno(){
  return this.form.get("temauno");
}
get Temaunovalid(){
  return this.Temauno?.touched && !this.Temauno?.valid;
}
get Anio(){
  return this.form.get("anio");
}
get Aniovalid(){
  return this.Anio?.touched && !this.Anio?.valid;
}
get Estado(){
  return this.form.get("estado");
}
get Estadovalid(){
  return this.Estado?.touched && !this.Estado?.valid;
}

onCreate(): void{
  const pro = new Proyecto(this.institucion, this.proyecto, this.profesion, this.logoproyecto, this.tema, this.temauno, this.anio, this.estado);
  this.sProyecto.save(pro).subscribe(db => {
    alert("Fallo en la carga, intentelo nuevamente");
    window.location.reload();
  }, err=>{
      alert("Proyecto agregado");
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
