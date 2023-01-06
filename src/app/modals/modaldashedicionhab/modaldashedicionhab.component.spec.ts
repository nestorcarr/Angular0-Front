import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashedicionhabComponent } from './modaldashedicionhab.component';

describe('ModaldashedicionhabComponent', () => {
  let component: ModaldashedicionhabComponent;
  let fixture: ComponentFixture<ModaldashedicionhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashedicionhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashedicionhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
