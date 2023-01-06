import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashmaseducComponent } from './modaldashmaseduc.component';

describe('ModaldashmaseducComponent', () => {
  let component: ModaldashmaseducComponent;
  let fixture: ComponentFixture<ModaldashmaseducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashmaseducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashmaseducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
