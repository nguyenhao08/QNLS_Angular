import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpbComponent } from './viewpb.component';

describe('ViewpbComponent', () => {
  let component: ViewpbComponent;
  let fixture: ComponentFixture<ViewpbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
