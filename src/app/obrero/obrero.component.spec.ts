import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObreroComponent } from './obrero.component';

describe('ObreroComponent', () => {
  let component: ObreroComponent;
  let fixture: ComponentFixture<ObreroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObreroComponent]
    });
    fixture = TestBed.createComponent(ObreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
