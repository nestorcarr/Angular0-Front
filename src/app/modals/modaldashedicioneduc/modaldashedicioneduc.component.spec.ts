import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashedicioneducComponent } from './modaldashedicioneduc.component';

describe('ModaldashedicioneducComponent', () => {
  let component: ModaldashedicioneducComponent;
  let fixture: ComponentFixture<ModaldashedicioneducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashedicioneducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashedicioneducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
