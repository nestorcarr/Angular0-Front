import { Component, Input, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/service/laboral.service';

@Component({
  selector: 'app-modaldashedicionlab',
  templateUrl: './modaldashedicionlab.component.html',
  styleUrls: ['./modaldashedicionlab.component.scss']
})
export class ModaldashedicionlabComponent implements OnInit {
  form!: FormGroup;
  traba: Laboral = {id: 1, empresa: "", logo: "", cargo: "", inicio: "", finalizacion: "", tareas: ""};
  //laboralId: number = 1; //Inicializo en  id fijo = 1
  //id: number = 1; //le pongo id fijo
  //Para enviar la funcion al componente padre
  @Input() editarLaboral : Laboral = {
    id: 0,
    empresa: "",
    logo: "",
    cargo: "",
    inicio: "",
    finalizacion: "",
    tareas: ""
  };


  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sLaboral: LaboralService,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
      //id:[''],
        empresa: ['', [Validators.required]],
        logo: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
        inicio: ['', [Validators.required]],
        finalizacion: ['', [Validators.required]],
        tareas: ['', [Validators.required]],

    })
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log(this.editarLaboral);
    this.form.controls['empresa']?.setValue(this.editarLaboral.empresa);
    this.form.controls['logo']?.setValue(this.editarLaboral.logo);
    this.form.controls['cargo']?.setValue(this.editarLaboral.cargo);
    this.form.controls['inicio']?.setValue(this.editarLaboral.inicio);
    this.form.controls['finalizacion']?.setValue(this.editarLaboral.finalizacion);
    this.form.controls['tareas']?.setValue(this.editarLaboral.tareas);
}

  get Empresa(){
    return this.form.get('empresa');
  }
  get Logo(){
    return this.form.get('logo');
  }
  get Cargo(){
    return this.form.get('cargo');
  }
  get Inicio(){
    return this.form.get('inicio');
  }
  get Finalizacion(){
    return this.form.get('finalizacion');
  }
  get Tareas(){
    return this.form.get('tareas');
  }

  onUpdate(): void{

    this.traba.id = this.editarLaboral.id;
    this.traba.empresa = this.form.get('empresa').value;
    this.traba.logo = this.form.get('logo').value;
    this.traba.cargo = this.form.get('cargo').value;
    this.traba.inicio = this.form.get('inicio').value;
    this.traba.finalizacion = this.form.get('cargo').value;
    this.traba.tareas = this.form.get('tareas').value;
    this.sLaboral.editLaboral(this.editarLaboral.id, this.traba).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
        //$("exampleModal12").modal("hide");
        //modalService.close('exampleModal12');
        //this.router.navigate(['/dashboard']);
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )



  }

}
