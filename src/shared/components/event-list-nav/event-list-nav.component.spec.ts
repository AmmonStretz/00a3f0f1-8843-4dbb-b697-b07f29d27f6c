import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListNavComponent } from './event-list-nav.component';

describe('EventListNavComponent', () => {
  let component: EventListNavComponent;
  let fixture: ComponentFixture<EventListNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventListNavComponent]
    });
    fixture = TestBed.createComponent(EventListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
