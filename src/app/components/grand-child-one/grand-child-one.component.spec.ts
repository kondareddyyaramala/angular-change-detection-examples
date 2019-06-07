import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildOneComponent } from './grand-child-one.component';

describe('GrandChildOneComponent', () => {
  let component: GrandChildOneComponent;
  let fixture: ComponentFixture<GrandChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
