import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/service/laboral.service';

@Component({
  selector: 'app-modaldashmaslab',
  templateUrl: './modaldashmaslab.component.html',
  styleUrls: ['./modaldashmaslab.component.scss']
})
export class ModaldashmaslabComponent implements OnInit {
  form: FormGroup;
  empresa: string = '';
  logoempresa: string = '';
  cargo: string = '';
  inicio: string = '';
  finalizacion: string = '';
  tareas: string = '';

   //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sLaboral: LaboralService
  ) {
    this.form = this.formBuilder.group({
      empresa: ['', [Validators.required]],
     logoempresa: ['', [Validators.required]],
      cargo: ['', Validators.required],
      inicio: ['', [Validators.required]],
     finalizacion: ['', [Validators.required]],
      tareas: ['', Validators.required],

    })

  }

  ngOnInit(): void {
  }
//Definir las validaciones
get Empresa(){
  return this.form.get("empresa");
}
get EmpresaValid(){
  return this.Empresa?.touched && !this.Empresa?.valid;
}

/*get EmpresaValid(){
  return this.Empresa?.valid;
}*/
/*get EmpresaInvalid(){
  return this.Empresa?.touched && !this.Empresa.valid;
}*/

get Logoempresa(){
  return this.form.get("logoempresa");
}
get LogoempresaValid(){
  return this.Logoempresa?.touched && !this.Logoempresa?.valid;
}
/*
get LogoempresaValid(){
  return this.Logoempresa?.valid;
}
get LogoempresaInvalid(){
  return this.Logoempresa?.touched && !this.Logoempresa.valid;
}*/

get Cargo(){
  return this.form.get("cargo");
}
get CargoValid(){
  return this.Cargo?.touched && !this.Cargo?.valid;
}
/*
get CargoValid(){
  return this.Cargo?.valid;
}
get CargoInvalid(){
  return this.Cargo?.touched && !this.Cargo.valid;
}*/
get Inicio(){
  return this.form.get("inicio");
}
get InicioValid(){
  return this.Inicio?.touched && !this.Inicio?.valid;
}


get Finalizacion(){
  return this.form.get("finalizacion");
}
get FinalizacionValid(){
  return this.Finalizacion?.touched && !this.Finalizacion?.valid;
}


get Tareas(){
  return this.form.get("tareas");
}
get TareasValid(){
  return this.Tareas?.touched && !this.Tareas?.valid;
}

onCreate(): void{
  const labo = new Laboral(this.empresa, this.logoempresa, this.cargo, this.inicio, this.finalizacion, this.tareas);
  this.sLaboral.save(labo).subscribe(db => {
    alert("Fallo la carga, intentelo nuevamente");
    window.location.reload();
  }, err=>{
      alert("Experiencia laboral agregada")
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
