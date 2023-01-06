import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionmashabComponent } from './edicionmashab.component';

describe('EdicionmashabComponent', () => {
  let component: EdicionmashabComponent;
  let fixture: ComponentFixture<EdicionmashabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionmashabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionmashabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
