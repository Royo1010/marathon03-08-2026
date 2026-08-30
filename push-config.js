(function () {
  "use strict";

  // Publieke configuratie. Private VAPID-sleutels en servertokens horen uitsluitend
  // als environment variables in de pushbackend, nooit in deze GitHub Pages-app.
  window.MARATHON_PUSH_CONFIG = Object.freeze({
    backendUrl: "",
    vapidPublicKey: "",
  });
})();
