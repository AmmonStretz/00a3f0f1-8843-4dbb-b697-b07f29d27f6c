import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EventDTO } from '../dtos/event.dto';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private sortedEventList: { [key: string]: EventDTO[] } = {};
  private selectedEventsList: EventDTO[] = [];
  public filterText = '';

  constructor(private http: HttpClient) {
    this.loadEvents();
  }

  private loadEvents() {
    firstValueFrom(
      this.http.get<EventDTO[]>(
        'https://teclead-ventures.github.io/data/london-events.json'
      )
    ).then((events: EventDTO[]) => {
      events.sort((a, b) => {
        return a.date.localeCompare(b.date);
      });
      events.forEach((event: EventDTO) => {
        if (event.date in this.sortedEventList) {
          this.sortedEventList[event.date].push(event);
        } else {
          this.sortedEventList[event.date] = [event];
        }
      });
    });
  }

  get groupedEvents(): { [key: string]: EventDTO[] } {
    const filteredGroupedEvents: { [key: string]: EventDTO[] } = {};

    Object.keys(this.sortedEventList).forEach((key) => {
      const eventsForDate = this.sortedEventList[key];
      const filteredEvents = eventsForDate.filter((event) =>
        event.title.toLowerCase().includes(this.filterText.toLowerCase())
      );
      if (filteredEvents.length > 0) {
        filteredGroupedEvents[key] = filteredEvents;
      }
    });

    return filteredGroupedEvents;
  }
  get selectedEvents(): EventDTO[] {
    if(!this.filterText.length) return this.selectedEventsList;
    return this.selectedEventsList.filter((event) =>
      event.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  selectEvent(_id: string): void {
    for (const key in this.sortedEventList) {
      if (this.sortedEventList.hasOwnProperty(key)) {
        const eventList = this.sortedEventList[key];
        const index = eventList.findIndex((event) => event._id === _id);

        if (index !== -1) {
          const selectedEvent = eventList.splice(index, 1)[0];
          this.selectedEvents.push(selectedEvent);
          if (eventList.length === 0) {
            delete this.sortedEventList[key];
          }
          break;
        }
      }
    }
  }
  deselectEvent(_id: string): void {
    const index = this.selectedEvents.findIndex((event) => event._id === _id);
    if (index !== -1) {
      const deselectedEvent = this.selectedEvents.splice(index, 1)[0];
      const dateKey = deselectedEvent.date;
      if (!this.sortedEventList[dateKey]) {
        this.sortedEventList[dateKey] = [];
      }
      this.sortedEventList[dateKey].push(deselectedEvent);
    }
  }
}
