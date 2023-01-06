/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducaciondashComponent } from './educaciondash.component';

describe('EducaciondashComponent', () => {
  let component: EducaciondashComponent;
  let fixture: ComponentFixture<EducaciondashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducaciondashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducaciondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
