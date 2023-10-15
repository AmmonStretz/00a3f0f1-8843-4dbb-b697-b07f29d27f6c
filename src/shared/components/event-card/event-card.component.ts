import { Component, Input } from '@angular/core';
import { EventDTO } from 'src/shared/dtos/event.dto';
import { EventService } from 'src/shared/services/event.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent {
  @Input() event!: EventDTO;
  @Input() isFavorite = false;
  constructor(private eventService: EventService) {}
  select() {
    this.eventService.selectEvent(this.event._id)
  }
  deselect() {
    this.eventService.deselectEvent(this.event._id)
  }
}
