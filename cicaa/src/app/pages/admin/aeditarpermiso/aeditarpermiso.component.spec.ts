import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeditarpermisoComponent } from './aeditarpermiso.component';

describe('AeditarpermisoComponent', () => {
  let component: AeditarpermisoComponent;
  let fixture: ComponentFixture<AeditarpermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeditarpermisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeditarpermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
