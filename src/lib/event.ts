interface Event {
    capacity: number;
    capacity_is_custom: boolean;
    category_id: string;
    changed: string;
    created: string;
    currency: string;
    description: {
        text: string;
        html: string;
    };
    end: {
        timezone: string;
        local: string;
        utc: string;
    };
    facebook_event_id: string | null;
    format_id: string;
    hide_end_date: boolean;
    hide_start_date: boolean;
    id: string;
    inventory_type: "limited" | "available" | "none";
    invite_only: boolean;
    is_externally_ticketed: boolean;
    is_free: boolean;
    is_locked: boolean;
    is_reserved_seating: boolean;
    is_series: boolean;
    is_series_parent: boolean;
    listed: boolean;
    locale: string;
    logo: {
        id: string;
        url: string;
        aspect_ratio: string;
        [key: string]: any;
    };
    logo_id: string;
    name: {
        text: string;
        html: string;
    };
    online_event: boolean;
    organization_id: string;
    organizer_id: string;
    privacy_setting: "unlocked" | "locked";
    published: string;
    resource_uri: string;
    shareable: boolean;
    show_colors_in_seatmap_thumbnail: boolean;
    show_pick_a_seat: boolean;
    show_remaining: boolean;
    show_seatmap_thumbnail: boolean;
    source: string;
    start: {
        timezone: string;
        local: string;
        utc: string;
    };
    status: "live" | "completed" | "started" | "ended" | "canceled";
    subcategory_id: string;
    summary: string;
    tx_time_limit: number | null;
    url: string;
    venue_id: string | null;
    version: number | null;

    venue?: Venue;
}

interface Venue {
    address: {
        address_1: string;
        address_2: string;
        city: string;
        country: string;
        latitude: string;
        localized_address_display: string;
        localized_area_display: string;
        localized_multi_line_address_display: string[];
        longitude: string;
        postal_code: string;
        region: string;
    };
    age_restriction: number | null;
    capacity: number | null;
    id: string;
    latitude: string;
    longitude: string;
    name: string;
    resource_uri: string;
}
