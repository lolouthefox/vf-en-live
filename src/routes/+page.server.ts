import { getEventDetails, getEventsFromOrganization } from '$lib/server/eventbrite';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        const events = await getEventsFromOrganization("2882612313051");

        return { events };
    } catch (error) {
        console.error('Error fetching data from Eventbrite:', error);
        return { events: null, details: null };
    }
};