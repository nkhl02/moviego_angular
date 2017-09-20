import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouiteListComponent } from './favouite-list.component';

describe('FavouiteListComponent', () => {
  let component: FavouiteListComponent;
  let fixture: ComponentFixture<FavouiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
