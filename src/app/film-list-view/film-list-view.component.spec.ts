import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListViewComponent } from './film-list-view.component';

describe('FilmListViewComponent', () => {
  let component: FilmListViewComponent;
  let fixture: ComponentFixture<FilmListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
