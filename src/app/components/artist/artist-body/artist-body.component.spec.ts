import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBodyComponent } from './artist-body.component';

describe('ArtistBodyComponent', () => {
  let component: ArtistBodyComponent;
  let fixture: ComponentFixture<ArtistBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
