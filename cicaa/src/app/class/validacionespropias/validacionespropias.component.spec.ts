import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionespropiasComponent } from './validacionespropias.component';

describe('ValidacionespropiasComponent', () => {
  let component: ValidacionespropiasComponent;
  let fixture: ComponentFixture<ValidacionespropiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidacionespropiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionespropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
