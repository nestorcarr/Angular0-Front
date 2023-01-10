import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  tokenService: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  onLogOut():void{

    this.tokenService.logOut();
    this.router.navigate(['index']);
    window.location.reload();

  }
}
