import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashmashabilComponent } from './modaldashmashabil.component';

describe('ModaldashmashabilComponent', () => {
  let component: ModaldashmashabilComponent;
  let fixture: ComponentFixture<ModaldashmashabilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashmashabilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashmashabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
