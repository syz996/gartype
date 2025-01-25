export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-FE1KGGZD3G';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      // Add additional parameters for better tracking
      page_title: document.title,
      page_location: window.location.href,
      send_to: GA_TRACKING_ID
    });
  }
};

// Track user interactions
export const trackInteraction = (elementId: string, interactionType: string) => {
  event({
    action: interactionType,
    category: 'User Interaction',
    label: elementId,
  });
};

// Track game related events
export const trackGameEvent = (gameTitle: string, eventType: string) => {
  event({
    action: eventType,
    category: 'Game',
    label: gameTitle,
  });
};

// Track blog related events
export const trackBlogEvent = (postTitle: string, eventType: string) => {
  event({
    action: eventType,
    category: 'Blog',
    label: postTitle,
  });
};