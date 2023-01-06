import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/service/laboral.service';

@Component({
  selector: 'app-edicionmaslab',
  templateUrl: './edicionmaslab.component.html',
  styleUrls: ['./edicionmaslab.component.scss']
})
export class EdicionmaslabComponent implements OnInit {
  form: FormGroup;
  empresa: string ="";
  logoempresa: string = "";
  cargo: string = "";
  inicio: string = "";
  finalizacion: string = "";
  tareas: string = "";

  constructor(private formBuilder: FormBuilder, private sLaboral: LaboralService) {
    this.form = this.formBuilder.group({
      empresa: ["", [Validators.required]],
      logoempresa: ["", [Validators.required]],
      cargo: ["", Validators.required],
      inicio: ["", [Validators.required]],
      finalizacion: ["", [Validators.required]],
      tareas: ["", Validators.required],
   })
  }



  ngOnInit(): void {
  }
//Definir las validaciones
get Empresa(){
  return this.form.get("empresa");
}

get Logoempresa(){
  return this.form.get("logoempresa");
}

get Cargo(){
  return this.form.get("cargo");
}
get Inicio(){
  return this.form.get("inicio");
}

get Tareas(){
  return this.form.get("tareas");
}
get Finalizacion(){
  return this.form.get("finalizacion");
}
//Validaciones
get EmpresaValid(){
  return this.Empresa?.touched && !this.Empresa.valid;
}

get LogoempresaValid(){
  return this.Logoempresa?.touched && !this.Logoempresa.valid;
}

get CargoValid(){
  return this.Cargo?.touched && !this.Cargo.valid;
}
get InicioValid(){
  return this.Inicio?.touched && !this.Inicio.valid;
}

get TareasValid(){
  return this.Tareas?.touched && !this.Tareas.valid;
}
get FinalizacionValid(){
  return this.Finalizacion?.touched && !this.Finalizacion.valid;
}
onCreate(): void{
  const labo = new Laboral(this.empresa, this.logoempresa, this.cargo, this.inicio, this.finalizacion, this.tareas);
  this.sLaboral.save(labo).subscribe(db => {
    alert("Laboral agregada");
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


