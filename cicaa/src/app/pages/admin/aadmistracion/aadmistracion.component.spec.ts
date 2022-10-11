import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadmistracionComponent } from './aadmistracion.component';

describe('AadmistracionComponent', () => {
  let component: AadmistracionComponent;
  let fixture: ComponentFixture<AadmistracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadmistracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadmistracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
