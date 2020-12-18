import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFilmViewComponent } from './single-film-view.component';

describe('SingleFilmViewComponent', () => {
  let component: SingleFilmViewComponent;
  let fixture: ComponentFixture<SingleFilmViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFilmViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFilmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
