import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApermisosusuarioComponent } from './apermisosusuario.component';

describe('ApermisosusuarioComponent', () => {
  let component: ApermisosusuarioComponent;
  let fixture: ComponentFixture<ApermisosusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApermisosusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApermisosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
