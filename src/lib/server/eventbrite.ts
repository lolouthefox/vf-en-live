import { EVENTBRITE_PRIVATE_TOKEN } from "$env/static/private";
import axios from "axios";

export async function getEventsFromOrganization(organizationId: string) {
    // https://www.eventbriteapi.com/v3/organizations/organization_id/events/

    const res = await axios.get(`https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/`, {
        headers: {
            Authorization: `Bearer ${EVENTBRITE_PRIVATE_TOKEN}`
        }
    })
    return res.data;
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
