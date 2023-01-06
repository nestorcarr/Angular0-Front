import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldashmasproyComponent } from './modaldashmasproy.component';

describe('ModaldashmasproyComponent', () => {
  let component: ModaldashmasproyComponent;
  let fixture: ComponentFixture<ModaldashmasproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldashmasproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldashmasproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
