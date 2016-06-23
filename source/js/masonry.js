(function ($, window) {
  'use strict';

  // Exit if the Masonry library has not been loaded
  if (!$.isFunction($.fn.masonry)) {
    return;
  }

  $(document).ready(function () {

    var $masonry_grid = $('.l-mason-grid');

    $masonry_grid.masonry({
      itemSelector: '.l-mason-grid__item',
      columnWidth: '.l-mason-grid__item',
      gutter: '.l-mason-grid__gutter',
      percentPosition: true,
      transitionDuration: 0,
      resize: false
    });

    var masonry_layout = function () {
      $masonry_grid.masonry('layout');
    };

    // Reset the layout after all assets are loaded and on each resize
    $(window).on('load resize', function () {
      masonry_layout();
    });

    // Chrome has video loading after dom issues, this is the only fix I could
    // find, and it only fires in the case of the browser being Chrome
    if (window.chrome) {
      setTimeout(masonry_layout, 500);
    }

  });

})(jQuery, window); // end jquery enclosure
