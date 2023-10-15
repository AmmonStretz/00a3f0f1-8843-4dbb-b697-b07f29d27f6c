import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/event.service';

@Component({
  selector: 'app-grouped-event-list',
  templateUrl: './grouped-event-list.component.html',
  styleUrls: ['./grouped-event-list.component.sass']
})
export class GroupedEventListComponent {
  constructor(public eventService: EventService) {}
}
