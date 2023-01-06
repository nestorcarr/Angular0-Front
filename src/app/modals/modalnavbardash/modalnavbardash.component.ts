import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modalnavbardash',
  templateUrl: './modalnavbardash.component.html',
  styleUrls: ['./modalnavbardash.component.scss']
})
export class ModalnavbardashComponent implements OnInit {
form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  //routerLink="/"
  limpiar(): void {
    this.form.reset();
  }
}
