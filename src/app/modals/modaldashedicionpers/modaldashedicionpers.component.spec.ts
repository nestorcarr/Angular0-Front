import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashedicionpersComponent } from './modaldashedicionpers.component';

describe('ModaldashedicionpersComponent', () => {
  let component: ModaldashedicionpersComponent;
  let fixture: ComponentFixture<ModaldashedicionpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashedicionpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashedicionpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
