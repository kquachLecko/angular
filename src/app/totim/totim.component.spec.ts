import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotimComponent } from './totim.component';

describe('TotimComponent', () => {
  let component: TotimComponent;
  let fixture: ComponentFixture<TotimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
