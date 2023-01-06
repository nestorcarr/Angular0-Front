import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashedicionproyComponent } from './modaldashedicionproy.component';

describe('ModaldashedicionproyComponent', () => {
  let component: ModaldashedicionproyComponent;
  let fixture: ComponentFixture<ModaldashedicionproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashedicionproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashedicionproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
