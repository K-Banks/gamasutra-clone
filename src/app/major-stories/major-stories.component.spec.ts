import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorStoriesComponent } from './major-stories.component';

describe('MajorStoriesComponent', () => {
  let component: MajorStoriesComponent;
  let fixture: ComponentFixture<MajorStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
