(function ($, Modernizr, window) {
  'use strict';

  $(document).ready(function () {
    var $fixed = $('.l-header--fixed');
    var $headerBranding = $('.header__branding');
    var $navbar = $('.l-navbar');
    var headerHeight = $headerBranding.outerHeight();
    var bp_medium_up = '(min-width: 992px)';

    // Exit if the site is not using a fixed header
    if (!$fixed.length) {
      return;
    }

    $(window).scroll(function () {
      var position = $(this).scrollTop();

      if (position > headerHeight) {
        $fixed.addClass('is-fixed');
        $navbar.addClass('is-fixed');
      }
      else {
        $fixed.removeClass('is-fixed');
        $navbar.removeClass('is-fixed');
      }
    });

    // Watch for changes to the browser size
    if (Modernizr.matchmedia) {
      // get MediaQueryList Interface
      var mql = window.matchMedia(bp_medium_up);

      mql.addListener(function (mql) {
        headerHeight = $headerBranding.outerHeight();
      });
    }

  });

})(jQuery, Modernizr, window); // end jquery enclosure
