import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerumLoadedComponent } from './serum-loaded.component';

describe('SerumLoadedComponent', () => {
  let component: SerumLoadedComponent;
  let fixture: ComponentFixture<SerumLoadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerumLoadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerumLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
