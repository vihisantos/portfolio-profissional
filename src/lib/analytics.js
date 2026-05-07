// Analytics utility for portfolio profissional

window.gtag = window.gtag || function() {
  (window.gtag.q = window.gtag.q || []).push(arguments);
};
window.gtag.q = window.gtag.q || [];
window.dataLayer = window.dataLayer || [];

function trackPageView(path) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-SBC8653FRP', {
      page_path: path || window.location.pathname,
    });
  }
}

function trackEvent(eventName, eventParams) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
}

function trackWhatsAppClick(phoneNumber) {
  trackEvent('click', {
    event_category: 'whatsapp',
    phone_number: phoneNumber,
  });
}

function trackFormSubmit(formName, success) {
  trackEvent(success ? 'form_submit_success' : 'form_submit_failure', {
    form_name: formName,
  });
}

function trackNewsletter(signup, success) {
  trackEvent(success ? 'newsletter_signup' : 'newsletter_error', {
    source: signup ? 'footer' : 'modal',
  });
}

function trackServiceClick(serviceName) {
  trackEvent('click', {
    event_category: 'service',
    event_label: serviceName,
  });
}

function trackPricingClick(planName) {
  trackEvent('click', {
    event_category: 'pricing',
    event_label: planName,
  });
}

function trackThemeChange(theme) {
  trackEvent('change_theme', {
    theme: theme,
  });
}

function trackExternalLink(url, label) {
  trackEvent('click', {
    event_category: 'external_link',
    event_label: label,
    url: url,
  });
}

export {
  trackPageView,
  trackEvent,
  trackWhatsAppClick,
  trackFormSubmit,
  trackNewsletter,
  trackServiceClick,
  trackPricingClick,
  trackThemeChange,
  trackExternalLink,
};