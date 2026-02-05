import { EVENTBRITE_PRIVATE_TOKEN } from "$env/static/private";
import axios from "axios";

export async function getEventsFromOrganization(organizationId: string) {
    // https://www.eventbriteapi.com/v3/organizations/organization_id/events/

    const res = await axios.get(`https://www.eventbriteapi.com/v3/organizations/${organizationId}/events?order_by=start_desc&status=live,started,ended,completed,canceled`, {
        headers: {
            Authorization: `Bearer ${EVENTBRITE_PRIVATE_TOKEN}`
        }
    })
    return res.data;
}

export async function getEventsFromOrganizationWithVenue(organizationId: string) {
    const eventsData = await getEventsFromOrganization(organizationId);
    const eventsWithVenue = await Promise.all(eventsData.events.map(async (event: any) => {
        if (event.venue_id) {
            const venueDetails = await getVenueDetails(event.venue_id);
            return { ...event, venue: venueDetails };
        }
        return event;
    }));
    return { ...eventsData, events: eventsWithVenue };
}

export async function getEventDetails(eventId: string) {
    // https://www.eventbriteapi.com/v3/events/event_id/

    const res = await axios.get(`https://www.eventbriteapi.com/v3/events/${eventId}/`, {
        headers: {
            Authorization: `Bearer ${EVENTBRITE_PRIVATE_TOKEN}`
        }
    })

    return res.data;
}

export async function getEventDetailsWithVenue(eventId: string) {
    const eventDetails = await getEventDetails(eventId);
    if (eventDetails.venue_id) {
        const venueDetails = await getVenueDetails(eventDetails.venue_id);
        return { ...eventDetails, venue: venueDetails };
    }
    return eventDetails;
}

export async function getVenueDetails(venueId: string) {
    // https://www.eventbriteapi.com/v3/venues/venue_id/

    const res = await axios.get(`https://www.eventbriteapi.com/v3/venues/${venueId}/`, {
        headers: {
            Authorization: `Bearer ${EVENTBRITE_PRIVATE_TOKEN}`
        }
    })

    return res.data;
}
