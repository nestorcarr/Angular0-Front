import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.scss']
})
export class ModalNavbarComponent implements OnInit {
  form: FormGroup;

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  username!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  //tokenService: any;
  //authService: any;
  //router: any;



  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder,
              private tokenService: TokenService,
              private authService: AuthService,
              private router: Router
    ) {
    //Creamos el grupo de controles para el formulario (eNombreUsuario)
    this.form= this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      username: ['', [Validators.required]],
    })
   }
/*
  ngOnInit(): void {
}*/
ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }else{
    this.isLogged = false;
  }
}



  /*
  onEnviar(event: Event){
    //Detenemos la ejecucion del comportamiento submit de un form
    event.preventDefault;

    if(this.form.valid){
      //LLamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna logica extra
      alert("Todo salio ok ¡Enviar formulario!");
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }*/

  onLogin(){ //:void
   this.loginUsuario = new LoginUsuario(this.username, this.password);
   //this.authService.login(this.loginUsuario).subscribe((data: { accessToken: any; username: any; authorities: string[]; }) =>{
   //this.authService.login(this.form.value).subscribe((data: { accessToken: any; username: any; authorities: string[]; }) =>{ 
   this.authService.login(this.loginUsuario).subscribe((data: { accessToken: any; username: any; authorities: string[]; }) =>{
   //this.authService.login(this.loginUsuario).subscribe(data =>{
      //this.authService.login(this.form.value).subscribe((data: { token: any; nombreUsuario: any; authorities: string[]; }) =>{
      //this.authService.login(this.form.value).subscribe(data  => {
        console.log(data);
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.accessToken);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/dashboard']);
        document.getElementById("cerrarModal666")?.click();
        alert("Todo salio ok ¡Enviar formulario!");
        //window.location.reload();
       }, (err: { error: { mensaje: string; }; }) =>{
       // }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        //alert("Todo salio ok ¡Enviar formulario!");
        window.location.reload();

       }
     )
  }





  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  get Password(){
    return this.form.get("password");
  }
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get PasswordValid(){
    return this.Password?.valid;
  }
  get Username(){
    return this.form.get("nombreUsuario");
  }
  get UsernameInvalid(){
    return this.Username?.touched && !this.Username?.valid;

  }
  get UsernameValid(){
    return this.Username?.valid;

  }
  /*
  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);

      })
  }*/


}
