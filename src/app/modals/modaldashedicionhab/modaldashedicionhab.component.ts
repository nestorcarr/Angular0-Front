import { Component, Input, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-modaldashedicionhab',
  templateUrl: './modaldashedicionhab.component.html',
  styleUrls: ['./modaldashedicionhab.component.scss']
})
export class ModaldashedicionhabComponent implements OnInit {
  form!: FormGroup;
  habi: Habilidad = {id: 1, habilidad: "", porcentaje: 0, color: ""};
  habilidadId: number = 1; //Inicializo en  id fijo = 1
  id: number = 1; //le pongo id fijo
  //Para enviar la funcion al componente padre
  @Input() editarHabilidad : Habilidad = {
    id: 0,
    habilidad: "",
    porcentaje: 0,
    color: ""
  };


  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
      //id:[''],
        habilidad: ['', [Validators.required]],
        porcentaje: ['', [Validators.required]],
        color: ['', [Validators.required]],

    })

  }
  ngOnInit(): void{

  }

  ngOnChanges(): void {
      console.log(this.editarHabilidad);
      this.form.controls['habilidad']?.setValue(this.editarHabilidad.habilidad);
      this.form.controls['porcentaje']?.setValue(this.editarHabilidad.porcentaje);
      this.form.controls['color']?.setValue(this.editarHabilidad.color);
  }
  
  get Habilidad(){
    return this.form.get('habilidad');
  }
  get Porcentaje(){
    return this.form.get('porcentaje');
  }
  get Color(){
    return this.form.get('color');
  }

  onUpdate(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.habi.id = this.editarHabilidad.id;
    this.habi.habilidad = this.form.get('habilidad').value;
    this.habi.porcentaje = this.form.get('porcentaje').value;
    this.habi.color = this.form.get('color').value;
    this.sHabilidad.editHabilidad(this.editarHabilidad.id, this.habi).subscribe(
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
/*metodo para traer la info de la ddbb
  cargarInfo(){
    this.sHabilidad.getById(this.id).subscribe(data => {
      this.habi = data;
    });*/
  }



