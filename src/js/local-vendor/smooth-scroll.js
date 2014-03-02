define(['domReady','jquery','jqueryEasing'], function(domReady) {

  var smoothScroll = function(evt){
    evt.preventDefault();
    var anchor = $(evt.target).attr('href');

    if (typeof anchor === 'undefined' || anchor === '') {
      return;
    }

    try {
      $('html,body').stop().animate({
        scrollTop: (anchor === '#top' ? 0 : $(anchor).offset().top)
      },750, 'easeInOutExpo');

      setTimeout(function(){
        window.location.hash = anchor;
      }, 850);
    } catch (error) {
      window.location.hash = anchor;
    }
    return false;
  };

  domReady(function(){
    $('a[href^="#"]').on('click', smoothScroll);
  });
});
