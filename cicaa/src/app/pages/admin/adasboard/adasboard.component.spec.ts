import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdasboardComponent } from './adasboard.component';

describe('AdasboardComponent', () => {
  let component: AdasboardComponent;
  let fixture: ComponentFixture<AdasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
