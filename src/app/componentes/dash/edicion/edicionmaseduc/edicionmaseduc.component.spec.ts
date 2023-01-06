import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionmaseducComponent } from './edicionmaseduc.component';

describe('EdicionmaseducComponent', () => {
  let component: EdicionmaseducComponent;
  let fixture: ComponentFixture<EdicionmaseducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionmaseducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionmaseducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
