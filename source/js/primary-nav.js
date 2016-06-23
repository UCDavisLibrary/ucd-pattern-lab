(function ($, window, Modernizr) {
  'use strict';

  $(document).ready(function () {
    var $menu = $('.primary-nav');
    var $menuMega = $('.primary-nav--mega');
    var $menuSuperfish = $('.primary-nav--superfish > .menu');
    var $menu_sub = $('.primary-nav .menu .menu');
    var $menu_sub_lower = $('.primary-nav .menu .menu .menu');
    var $menu_link = $('.primary-nav a');
    var bp_medium_up = '(min-width: 992px)';
    var $submenuToggle = $('.primary-nav .submenu-toggle');
    var hoverTimer = false;
    var hoverDelay = 300;
    var maxDepth = 2; // How deep Superfish dropdowns should go

    var megaDropDown = function () {
      $menuMega.hoverIntent(function () {
        clearTimeout(hoverTimer);
        $menuMega.addClass('is-hover');
      }, function () {
        hoverTimer = setTimeout(function () {
          $menuMega.removeClass('is-hover');
        }, hoverDelay);
      });

      // Add focus events for accessibility
      $menu_link.on('focus', function (e) {
        clearTimeout(hoverTimer);
        $menuMega.addClass('is-hover');
      });
      $menu_link.on('focusout', function (e) {
        hoverTimer = setTimeout(function () {
          $menuMega.removeClass('is-hover');
        }, hoverDelay);
      });
    };

    var menuSwitch = function (mql, legacy) {
      // Desktop
      if (mql.matches || legacy) {
        // Initialize the Mega Menu
        if ($menuMega.length) {
          // Show submenus
          $menu_sub.show();
          // Hide Lower submenus
          $menu_sub_lower.hide();

          // Enable the megamenu dropdown
          megaDropDown();
        }

        // Initialize the Superfish dropdowns
        if ($menuSuperfish.length) {
          $menuSuperfish.superfish({
            hoverClass: 'sf--hover',
            delay: hoverDelay,
            onBeforeShow: function () {
              var depth = this.parents('.menu').length;
              // If the maximum depth has already been reached, remove the
              // classes signifying there are children
              if (depth === maxDepth) {
                $(this).find('a').removeClass('sf-with-ul');
              }

              // Don't show submenus lower than the maximum depth
              if (depth > maxDepth) {
                return false;
              }
            }
          });
        }

      }

      // Mobile
      else {
        // Disable the Mega Menu
        if ($menuMega.length) {
          // Remove hover bind
          $menu.off('mouseenter mouseleave');
        }

        // Disable the Superfish dropdowns
        if ($menuSuperfish.length) {
          $menuSuperfish.superfish('destroy');
        }

        // Hide submenus
        $menu_sub.hide();
        // Remove the mobile submenu toggle class
        $submenuToggle.removeClass('submenu-toggle--open');
      }
    };

    // Watch for changes to the browser size
    if (Modernizr.matchmedia) {
      // get MediaQueryList Interface
      var mql = window.matchMedia(bp_medium_up);

      mql.addListener(menuSwitch);
      // On Load
      menuSwitch(mql);
    }
    // Legacy without the ability to detect media queries. Render desktop
    else {
      menuSwitch(false, true);
    }

    // Toggle submenu when clicked
    $submenuToggle.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('submenu-toggle--open')
        .parent().next('.menu').slideToggle('fast');
    });

  });

})(jQuery, window, Modernizr); // end jquery enclosure
