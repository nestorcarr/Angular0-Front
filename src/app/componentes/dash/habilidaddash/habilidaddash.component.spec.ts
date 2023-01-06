/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HabilidaddashComponent } from './habilidaddash.component';

describe('HabilidaddashComponent', () => {
  let component: HabilidaddashComponent;
  let fixture: ComponentFixture<HabilidaddashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidaddashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidaddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
