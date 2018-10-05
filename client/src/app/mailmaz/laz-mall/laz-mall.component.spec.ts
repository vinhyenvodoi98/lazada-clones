import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazMallComponent } from './laz-mall.component';

describe('LazMallComponent', () => {
  let component: LazMallComponent;
  let fixture: ComponentFixture<LazMallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazMallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
