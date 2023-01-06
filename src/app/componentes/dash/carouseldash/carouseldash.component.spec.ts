/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarouseldashComponent } from './carouseldash.component';

describe('CarouseldashComponent', () => {
  let component: CarouseldashComponent;
  let fixture: ComponentFixture<CarouseldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
