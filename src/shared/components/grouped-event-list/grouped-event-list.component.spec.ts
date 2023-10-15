import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedEventListComponent } from './grouped-event-list.component';

describe('GroupedEventListComponent', () => {
  let component: GroupedEventListComponent;
  let fixture: ComponentFixture<GroupedEventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedEventListComponent]
    });
    fixture = TestBed.createComponent(GroupedEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
