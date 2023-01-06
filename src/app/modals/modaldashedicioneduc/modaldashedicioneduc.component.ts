import { Component, Input, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-modaldashedicioneduc',
  templateUrl: './modaldashedicioneduc.component.html',
  styleUrls: ['./modaldashedicioneduc.component.scss']
})
export class ModaldashedicioneducComponent implements OnInit {
  form!: FormGroup;
  educa: Educacion = {id: 1, universidad: "", logo: "", titulo: "", institucion: "", estado: ""};
  //educacionId: string = ""; //Inicializo en  id fijo = 1
  //id: number = 1; //le pongo id fijo
  //Para enviar la funcion al componente padre
  @Input() editarEducacion : Educacion = {
    id: 0,
    universidad: "",
    logo: "",
    titulo: "",
    institucion: "",
    estado: ""
  };


  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sEducacion: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
      //id:[''],
        universidad: ['', [Validators.required]],
        logo: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        institucion: ['', [Validators.required]],
        estado: ['', [Validators.required]],
    })
  }

  /*ngOnInit(): void {
    this.cargarInfo();
      const id = this.activatedRoute.snapshot.params['id'];
      this.sEducacion.getById(this.id).subscribe(
        data => {
          this.educa = data;
        }, () =>{

        })
  }*/
  ngOnInit(): void{

  }
  ngOnChanges(): void {
      console.log(this.editarEducacion);
      this.form.controls['universidad']?.setValue(this.editarEducacion.universidad);
      this.form.controls['logo']?.setValue(this.editarEducacion.logo);
      this.form.controls['titulo']?.setValue(this.editarEducacion.titulo);
      this.form.controls['institucion']?.setValue(this.editarEducacion.institucion);
      this.form.controls['estado']?.setValue(this.editarEducacion.estado);

  }

  get Universidad(){
    return this.form.get('universidad');
  }
  get Logo(){
    return this.form.get('logo');
  }
  get Titulo(){
    return this.form.get('titulo');
  }
  get Institucion(){
    return this.form.get('institucion');
  }
  get Estado(){
    return this.form.get('estado');
  }

  /*onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.editEducacion(this.id, this.educa).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )


  }*/
//metodo para traer la info de la ddbb
  /*cargarInfo(){
    this.sEducacion.getById(this.id).subscribe(data => {
      this.educa = data;
    });
  }*/

  onUpdate(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.educa.id = this.editarEducacion.id;
    this.educa.universidad = this.form.get('universidad').value;
    this.educa.logo = this.form.get('logo').value;
    this.educa.titulo = this.form.get('titulo').value;
    this.educa.institucion = this.form.get('institucion').value;
    this.educa.estado = this.form.get('estado').value;

    this.sEducacion.editEducacion(this.editarEducacion.id, this.educa).subscribe(
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


