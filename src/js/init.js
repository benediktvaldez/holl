define(['domReady','jquery'], function() {

  $(document).one('full-window-height',function(){
    $('html').addClass('active');
  });

});
