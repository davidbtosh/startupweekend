import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyCafesComponent } from './nearby-cafes.component';

describe('NearbyCafesComponent', () => {
  let component: NearbyCafesComponent;
  let fixture: ComponentFixture<NearbyCafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyCafesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
