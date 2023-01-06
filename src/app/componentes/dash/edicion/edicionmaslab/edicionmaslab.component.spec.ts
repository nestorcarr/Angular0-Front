import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionmaslabComponent } from './edicionmaslab.component';

describe('EdicionmaslabComponent', () => {
  let component: EdicionmaslabComponent;
  let fixture: ComponentFixture<EdicionmaslabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionmaslabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionmaslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
