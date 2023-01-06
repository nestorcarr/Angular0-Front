import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionmasproyComponent } from './edicionmasproy.component';

describe('EdicionmasproyComponent', () => {
  let component: EdicionmasproyComponent;
  let fixture: ComponentFixture<EdicionmasproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionmasproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionmasproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
