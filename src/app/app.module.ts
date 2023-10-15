import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventListNavComponent } from '../shared/components/event-list-nav/event-list-nav.component';
import { EventListComponent } from 'src/shared/components/event-list/event-list.component';
import { EventCardComponent } from 'src/shared/components/event-card/event-card.component';
import { GroupedEventListComponent } from '../shared/components/grouped-event-list/grouped-event-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: GroupedEventListComponent },
  { path: 'cart-summary', component: EventListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EventListNavComponent,
    EventListComponent,
    EventCardComponent,
    GroupedEventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
