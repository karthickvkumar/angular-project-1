import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkChildComponent } from './milk-child.component';

describe('MilkChildComponent', () => {
  let component: MilkChildComponent;
  let fixture: ComponentFixture<MilkChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
