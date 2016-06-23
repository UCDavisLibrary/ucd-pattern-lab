(function ($) {
  'use strict';

  $(document).ready(function () {

    var weightedClass = 'panel__title--weighted';
    var $title = $('.panel--weighted-underline .panel__title');

    // Wrap the first word of each weighted title with a span
    $title.each(function () {
      var $this = $(this);
      var text = $this.html();
      var pattern = /^((\S{3,})|(\S{1,2}\s\S+))/;
      var matches = text.match(pattern);

      if (matches) {
        text = text.replace(pattern, '<span class="' + weightedClass + '">' + matches[0] + '</span>');
      }
      else {
        text = '<span class="' + weightedClass + '">' + text + '</span>';
      }
      $this.html(text);
    });

  });

})(jQuery); // end jquery enclosure
