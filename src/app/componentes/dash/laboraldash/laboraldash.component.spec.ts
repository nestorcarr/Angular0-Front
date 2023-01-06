/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaboraldashComponent } from './laboraldash.component';

describe('LaboraldashComponent', () => {
  let component: LaboraldashComponent;
  let fixture: ComponentFixture<LaboraldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboraldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboraldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
