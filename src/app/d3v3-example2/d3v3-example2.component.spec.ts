import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v3Example2Component } from './d3v3-example2.component';

describe('D3v3Example2Component', () => {
  let component: D3v3Example2Component;
  let fixture: ComponentFixture<D3v3Example2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v3Example2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v3Example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
