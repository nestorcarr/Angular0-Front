
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';


@Component({
  selector: 'app-modaleditar',
  templateUrl: './modaleditar.component.html',
  styleUrls: ['./modaleditar.component.css'],
})
export class ModaleditarComponent implements OnInit {
  form!: FormGroup;
  bann: Banner = {id: 1, carouselimag: "", carouselimage: "", carouselimagen: "", imageprincipal: ""};
  //bannerId: number = 1; //Inicializo en  id fijo = 1
  //id: number = 1; //le pongo id fijo
  @Input() editarBanner : Banner = {
    id: 0,
    carouselimag: "",
    carouselimage: "",
    carouselimagen: "",
    imageprincipal: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private sBanner: BannerService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.form=this.formBuilder.group({
      //id:[''],
      carouselimag: ['', [Validators.required]],
      carouselimage: ['', [Validators.required]],
      carouselimagen: ['', [Validators.required]],
      //imageprincipal: ['', [Validators.required]],

    })

    /*this.form = new FormGroup({

      carouselimag: new FormControl(''),
      carouselimage: new FormControl(''),
      carouselimagen: new FormControl(''),
      imageprincipal: new FormControl('')


    });*/

   }
/* 1
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.getById(id).subscribe(data =>{
      this.perso = data;

  }, () =>{

      }
    )
  }*/

/*
  ngOnInit(): void {
    this.cargarInfo();
    const id = this.activatedRoute.snapshot.params['id'];
    this.sBanner.getById(this.id).subscribe(
      data => {
        this.bann = data;
      }, () =>{

      })
  }*/
  ngOnInit(): void{

  }

  ngOnChanges(): void {
      this.bann = this.editarBanner;
      console.log(this.editarBanner);
      this.form.controls['carouselimag']?.setValue(this.editarBanner.carouselimag);
      this.form.controls['carouselimage']?.setValue(this.editarBanner.carouselimage);
      this.form.controls['carouselimagen']?.setValue(this.editarBanner.carouselimagen);

  }



  get Carouselimag(){
    return this.form.get('carouselimag');
  }
  get Carouselimage(){
    return this.form.get('carouselimage');
  }
  get Carouselimagen(){
    return this.form.get('carouselimagen');
  }
  /*get Imageprincipal(){
    return this.form.get('imageprincipal');
  }*/

  onUpdate(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    this.bann.id = this.editarBanner.id;
    this.bann.carouselimag = this.form.get('carouselimag').value;
    this.bann.carouselimage = this.form.get('carouselimage').value;
    this.bann.carouselimagen = this.form.get('carouselimagen').value;

    this.sBanner.editBanner(this.editarBanner.id, this.bann).subscribe(
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
  submit() {
    this.datos=`Carouselimag=${this.form.value.Carouselimag}
                Carouselimage=${this.form.value.Carouselimage}
                Carouselimagen=${this.form.value.Carouselimagen}
                Imageprincipal=${this.form.value.Imageprincipal}
                `;
  }*/


/*
  onUpdate(): void{
    this.sPersona.edit(this.form.value).subscribe(data =>{
        alert("Persona modificada");
        this.router.navigate(['']);

  })

  }*/
/*  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sBanner.editBanner(this.id, this.bann).subscribe(
      data => {
        alert("La persona fue modificada");
        this.router.navigate([]);
      }, err => {
        alert("error");
        this.router.navigate([]);
      }
    )
  }*/
/*
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sBanner.editBanner(this.id, this.bann).subscribe(
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
    this.sBanner.getById(this.id).subscribe(data => {
      this.bann = data;
    });
  }

  limpiar(): void {
    this.form.reset();
  }*/

}
