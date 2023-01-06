import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashedicionlabComponent } from './modaldashedicionlab.component';

describe('ModaldashedicionlabComponent', () => {
  let component: ModaldashedicionlabComponent;
  let fixture: ComponentFixture<ModaldashedicionlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashedicionlabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashedicionlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
