define(['domReady','css3','jquery'], function(domReady,css3) {

  var initNav = function(selector) {
    var $document, $nav, $window, navHeight, lastScroll, threshold;

    $nav = $(selector);
    navHeight = parseInt($nav.innerHeight(),10);
    $document = $(document);
    $window = $(window);
    threshold = 0;
    lastScroll = 0;

    $window.on('scroll', function() {
      var diff, newScroll, navTop;
      if ($('html').hasClass('ie')) {
        return;
      }
      newScroll = $document.scrollTop();
      navTop = $('hero').outerHeight() - navHeight;
      if (newScroll < navTop) {
        return $nav.removeClass('fix');
      } else { $nav.addClass('fix'); }
      diff = newScroll - lastScroll;
      lastScroll = newScroll;
      if (diff > 5 && newScroll > navHeight) {
        if (!$nav.data('ishidden')) {
          $nav.css(css3.translate(-navHeight));
        }
        return $nav.data('ishidden', true);
      } else if (newScroll + $window.height() < $document.height() && diff < -5) {
        if ($nav.data('ishidden')) {
          $nav.css(css3.translate(0));
        }
        return $nav.data('ishidden', false);
      }
    });
  };

  domReady(function(){

    initNav('nav.top');
  });

});
