/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedesdashComponent } from './redesdash.component';

describe('RedesdashComponent', () => {
  let component: RedesdashComponent;
  let fixture: ComponentFixture<RedesdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
