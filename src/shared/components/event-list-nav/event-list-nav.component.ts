import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/event.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-event-list-nav',
  templateUrl: './event-list-nav.component.html',
  styleUrls: ['./event-list-nav.component.sass'],
})
export class EventListNavComponent {
  public inCartSummary = false;

  constructor(private router: Router, public eventService: EventService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.inCartSummary = event.url === '/cart-summary';
      }
    });
  }
  get numberOfSelected() {
    return this.eventService.selectedEvents.length;
  }
  filterText = '';

  onFilterTextChange() {
    this.eventService.filterText = this.filterText;
  }
  clearFilterText() {
    this.filterText = '';
    this.onFilterTextChange();
  }
}
