import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMovieDetailComponent } from './favourite-movie-detail.component';

describe('FavouriteMovieDetailComponent', () => {
  let component: FavouriteMovieDetailComponent;
  let fixture: ComponentFixture<FavouriteMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
