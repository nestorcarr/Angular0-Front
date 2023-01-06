import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-modalfooter',
  templateUrl: './modalfooter.component.html',
  styleUrls: ['./modalfooter.component.scss']
})
export class ModalfooterComponent implements OnInit {
  form: FormGroup;
  
  

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { 
      //Creamos el grupo de controles para el formulario
      this.form= this.formBuilder.group({
       // name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        //comentario: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }
  
  get Mail(){
    return this.form.get("email");
  }
  get MailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }
  get MailValid(){
    return this.Mail?.valid;
  }
// get Name(){
//   return this.form.get("name");
//}
//get NameInvalid(){
//    return this.Name?.touched && !this.Name?.valid;
//  }
//  get NameValid(){
//    return this.Name?.valid;
//  }*/
//get Comentario(){
//  return this.form.get("comentario");
//}
//get ComentarioInvalid(){
//  return this.Name?.touched && !this.Name?.valid;
//}
//get ComentarioValid(){
//  return this.Name?.valid;
//}
  
  onEnviar(event: Event){
    //Detenemos la ejecucion del comportamiento submit de un form
    event.preventDefault;

    if(this.form.valid){
      //LLamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna logica extra
      alert("¡Mail enviado!")
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
