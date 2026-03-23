// img-patch.js — replaces deprecated source.unsplash.com with working picsum.photos URLs
// Drop-in: included after all data-*.js files on every page
(function () {
  'use strict';
  if (!window.COUNTRIES_DATA) return;

  // Simple deterministic hash → integer for picsum seed
  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) {
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function picsumUrl(seed, w, h) {
    return 'https://picsum.photos/seed/' + hashStr(seed) + '/' + w + '/' + h;
  }

  function needsFix(url) {
    return !url || url.indexOf('source.unsplash.com') !== -1;
  }

  Object.keys(window.COUNTRIES_DATA).forEach(function (cId) {
    var c = window.COUNTRIES_DATA[cId];
    if (needsFix(c.heroImage)) {
      c.heroImage = picsumUrl(cId + '-hero', 1920, 1080);
    }
    (c.destinations || []).forEach(function (d) {
      if (needsFix(d.heroImage)) {
        d.heroImage = picsumUrl(cId + '-' + d.id + '-hero', 1920, 1080);
      }
      if (!d.galleryImages || !d.galleryImages[0] || needsFix(d.galleryImages[0])) {
        d.galleryImages = [
          picsumUrl(cId + '-' + d.id + '-g1', 800, 1000),
          picsumUrl(cId + '-' + d.id + '-g2', 800, 1000)
        ];
      }
    });
  });
})();
