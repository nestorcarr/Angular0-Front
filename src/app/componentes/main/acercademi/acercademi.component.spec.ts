/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcercademiComponent } from './acercademi.component';

describe('AcercademiComponent', () => {
  let component: AcercademiComponent;
  let fixture: ComponentFixture<AcercademiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercademiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
