// https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
import { GA_TRACKING_ID } from "../constants";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};
