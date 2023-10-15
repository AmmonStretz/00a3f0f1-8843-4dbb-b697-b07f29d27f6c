import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EventDTO } from 'src/shared/dtos/event.dto';
import { EventService } from 'src/shared/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.sass']
})
export class EventListComponent {
  constructor(public eventService: EventService) {}
}
