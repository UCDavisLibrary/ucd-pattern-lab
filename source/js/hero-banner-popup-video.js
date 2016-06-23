(function ($) {
  'use strict';

  // This is assuming a Youtube or Vimeo iframe embed is present
  $('.hero-banner__video-play').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $videoContainer = $('.hero-banner__video-popup');
    var $video = $videoContainer.find('iframe');
    var src = $video.attr('src');
    var queryCharacter = '?';

    // Append the autoplay tag as a new parameter or appended to existing params
    if (src.indexOf('?') !== -1) {
      queryCharacter = '&';
    }
    $video.attr('src', src + queryCharacter + 'autoplay=1');

    // Show the Video
    $videoContainer.removeClass('u-hidden');

    // Hide Everything else
    $('.hero-banner__body, .hero-banner__image').addClass('u-hidden');
  });

})(jQuery); // end jquery enclosure
