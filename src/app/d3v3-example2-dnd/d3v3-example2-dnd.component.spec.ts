import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v3Example2DndComponent } from './d3v3-example2-dnd.component';

describe('D3v3Example2DndComponent', () => {
  let component: D3v3Example2DndComponent;
  let fixture: ComponentFixture<D3v3Example2DndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v3Example2DndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v3Example2DndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
