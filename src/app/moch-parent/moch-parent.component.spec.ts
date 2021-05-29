import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochParentComponent } from './moch-parent.component';

describe('MochParentComponent', () => {
  let component: MochParentComponent;
  let fixture: ComponentFixture<MochParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MochParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MochParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
