/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModaleditarComponent } from './modaleditar.component';

describe('ModaleditarComponent', () => {
  let component: ModaleditarComponent;
  let fixture: ComponentFixture<ModaleditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
