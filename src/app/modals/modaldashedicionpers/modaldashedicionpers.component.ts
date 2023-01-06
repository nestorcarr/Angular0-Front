import { Component, Input, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-modaldashedicionpers',
  templateUrl: './modaldashedicionpers.component.html',
  styleUrls: ['./modaldashedicionpers.component.scss']
})
export class ModaldashedicionpersComponent implements OnInit {
  form!: FormGroup;
  perso: Persona = {id: 1, nombre: "", apellido: "", profesion: "", acerca_de_mi: "", acercademi: "", imageprincipal: ""};
  //personaId: number = 1; //Inicializo en  id fijo = 1 porque solo habra 1 persona
  //id: number = 1; //le pongo id fijo porque solo tendre 1 info personal
  @Input() editarPersona : Persona = {
    id: 0,
    nombre: "",
    apellido: "",
    profesion: "",
    acerca_de_mi: "",
    acercademi: "",
    imageprincipal: ""
  };

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sPersona: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form=this.formBuilder.group({
      //id:[''],
    //  nombre: ['', [Validators.required]],
    //  apellido: ['', [Validators.required]],
    //  profesion: ['', [Validators.required]],
      acerca_de_mi: ['', [Validators.required]],
      acercademi: ['', [Validators.required]],
    //  imageprincipal: ['', [Validators.required]],

    })
  }
/*
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data =>{
      this.perso = data;
    }

    )*/
    //Lo comente para que no me salga el cartel y me redireccione al index
    /*,err =>{
      alert("Error al cargar los datos");
      this.router.navigate(['']);
    } */
/*
    ngOnInit(): void {
      this.cargarInfo();
      const id = this.activatedRoute.snapshot.params['id'];
      this.sPersona.getById(this.id).subscribe(
        data => {
          this.perso = data;
        }, () =>{

        })
    }*/



  //}
 /* get Nombre(){
    return this.form.get('nombre');
  }
  get Apellido(){
    return this.form.get('apellido');
  }
  get Profesion(){
    return this.form.get('profesion');
  }*/
  get Acerca_de_mi(){
    return this.form.get('acerca_de_mi');
  }
  get Acercademi(){
    return this.form.get('acercademi');
  }

  ngOnInit(): void{

  }

  ngOnChanges(): void {
      this.perso = this.editarPersona;
      console.log(this.editarPersona);
      this.form.controls['acerca_de_mi']?.setValue(this.editarPersona.acerca_de_mi);
      this.form.controls['acercademi']?.setValue(this.editarPersona.acercademi);

  }

  onUpdate(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.perso.id = this.editarPersona.id;
    this.perso.acerca_de_mi = this.form.get('acerca_de_mi').value;
    this.perso.acercademi = this.form.get('acercademi').value;

    this.sPersona.editPersona(this.editarPersona.id, this.perso).subscribe(
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

/*
  onUpdate(): void{
    this.sPersona.edit(this.form.value).subscribe(data =>{
        alert("Persona modificada");
        this.router.navigate(['']);

  })

  }

  onEnviar(event:Event){
    if(this.form.valid){
      this.onUpdate();
    }else{
      alert("fallo en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }*/
/*
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.editPersona(this.id, this.perso).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )


  }
//metodo para traer la info de la ddbb
  cargarInfo(){
    this.sPersona.getById(this.id).subscribe(data => {
      this.perso = data;
    });
  }

  limpiar(): void {
    this.form.reset();
  }
*/

}
