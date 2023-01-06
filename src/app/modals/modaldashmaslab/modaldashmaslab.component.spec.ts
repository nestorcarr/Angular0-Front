import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashmaslabComponent } from './modaldashmaslab.component';

describe('ModaldashmaslabComponent', () => {
  let component: ModaldashmaslabComponent;
  let fixture: ComponentFixture<ModaldashmaslabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashmaslabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashmaslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
