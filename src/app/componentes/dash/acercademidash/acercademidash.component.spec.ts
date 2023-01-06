/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcercademidashComponent } from './acercademidash.component';

describe('AcercademidashComponent', () => {
  let component: AcercademidashComponent;
  let fixture: ComponentFixture<AcercademidashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercademidashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercademidashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
