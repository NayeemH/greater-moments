import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesComponent } from './ones.component';

describe('OnesComponent', () => {
  let component: OnesComponent;
  let fixture: ComponentFixture<OnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
