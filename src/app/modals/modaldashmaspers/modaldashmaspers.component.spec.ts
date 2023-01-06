import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashmaspersComponent } from './modaldashmaspers.component';

describe('ModaldashmaspersComponent', () => {
  let component: ModaldashmaspersComponent;
  let fixture: ComponentFixture<ModaldashmaspersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashmaspersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashmaspersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
