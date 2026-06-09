(() => {
  const GTM_ID = 'GTM-TJRB2WDP';
  const META_PIXEL_ID = '1752399061695038';
  let loaded = false;

  function loadScript(src) {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadTracking() {
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript('https://www.googletagmanager.com/gtm.js?id=' + GTM_ID);

    if (!window.fbq) {
      const fbq = window.fbq = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
    }
    loadScript('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function scheduleTracking() {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadTracking, { timeout: 8000 });
    } else {
      window.setTimeout(loadTracking, 8000);
    }
  }

  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, loadTracking, { once: true, passive: true });
  });

  window.addEventListener('load', scheduleTracking, { once: true });

  document.addEventListener('click', (event) => {
    const link = event.target.closest && event.target.closest('a[href*="wa.me"]');
    if (!link) return;
    loadTracking();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'wa_click', link_url: link.href });
    if (window.fbq) window.fbq('trackCustom', 'WA_Click');
  });
})();
