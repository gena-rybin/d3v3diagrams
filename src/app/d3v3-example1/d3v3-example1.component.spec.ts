import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v3Example1Component } from './d3v3-example1.component';

describe('D3v3Example1Component', () => {
  let component: D3v3Example1Component;
  let fixture: ComponentFixture<D3v3Example1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v3Example1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v3Example1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
