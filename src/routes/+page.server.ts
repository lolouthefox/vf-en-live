import { getEventDetails, getEventsFromOrganization, getEventsFromOrganizationWithVenue } from '$lib/server/eventbrite';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        const events = await getEventsFromOrganizationWithVenue("2882612313051");

        return { events: events.events as Event[] };
    } catch (error) {
        console.error('Error fetching data from Eventbrite:', error);
        return { events: null, details: null };
    }
};