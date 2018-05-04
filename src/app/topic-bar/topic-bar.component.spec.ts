import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBarComponent } from './topic-bar.component';

describe('TopicBarComponent', () => {
  let component: TopicBarComponent;
  let fixture: ComponentFixture<TopicBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
