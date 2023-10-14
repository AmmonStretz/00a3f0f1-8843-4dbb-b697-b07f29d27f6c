import { ArtistDTO } from "./artist.dto";
import { PickDTO } from "./pick.dto";
import { VenueDTO } from "./venue.dto";

export interface EventDTO {
    _id: string;
    title: string;
    flyerFront: string;
    attending: number;
    date: string;
    startTime: string;
    endTime: string;
    contentUrl: string;
    venue: VenueDTO;
    pick: PickDTO;
    artists: ArtistDTO[];
    city: string;
    country: string;
    private: boolean;
    __v: number;
  }
  
  
  
  
  
  