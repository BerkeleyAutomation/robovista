window.HELP_IMPROVE_VIDEOJS = false;

(function initTocScrollSpy() {
  var sectionIds = [
    'introduction',
    'rqa',
    'benchmark',
    'evaluation',
    'eval-benchmark',
    'eval-physical',
    'conclusion',
    'references'
  ];

  function sectionTop(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function updateActiveToc() {
    var nav = document.getElementById('contents-nav');
    if (!nav) return;

    var links = nav.querySelectorAll('a[data-toc-id]');
    var offset = 110;
    var scrollPos = window.scrollY + offset;
    var current = sectionIds[0];

    for (var i = 0; i < sectionIds.length; i++) {
      var id = sectionIds[i];
      var top = sectionTop(id);
      if (top !== null && scrollPos >= top - 12) {
        current = id;
      }
    }

    links.forEach(function (a) {
      if (a.getAttribute('data-toc-id') === current) {
        a.classList.add('is-active');
      } else {
        a.classList.remove('is-active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveToc, { passive: true });
  window.addEventListener('resize', updateActiveToc);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateActiveToc);
  } else {
    updateActiveToc();
  }
})();

$(document).ready(function() {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  bulmaSlider.attach();
});
