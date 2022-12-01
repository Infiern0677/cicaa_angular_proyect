import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuevopermisoComponent } from './anuevopermiso.component';

describe('AnuevopermisoComponent', () => {
  let component: AnuevopermisoComponent;
  let fixture: ComponentFixture<AnuevopermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuevopermisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuevopermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
