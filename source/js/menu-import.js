(function ($, window) {
  'use strict';

  var domain = 'www.ucdavis.edu';

  $(document).ready(function () {

    $('[data-menu-name]').each(function () {
      var $menu = $(this);
      // Get the menu name
      var menu_name = $menu.data('menu-name');

      // Fetch menus from the main website
      $.ajax({
        url: 'https://' + domain + '/menu/' + menu_name,
        method: 'POST',
        dataType: 'html',
        crossDomain: true
      }).done(function (data) {
        var $data = $(data);
        $menu.replaceWith($data);
      });
    });

  });

})(jQuery, window); // end jquery enclosure
