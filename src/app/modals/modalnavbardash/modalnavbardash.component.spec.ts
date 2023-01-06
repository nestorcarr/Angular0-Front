import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnavbardashComponent } from './modalnavbardash.component';

describe('ModalnavbardashComponent', () => {
  let component: ModalnavbardashComponent;
  let fixture: ComponentFixture<ModalnavbardashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalnavbardashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalnavbardashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
