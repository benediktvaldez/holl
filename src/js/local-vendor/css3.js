define([], function() {
  return {
    translate: function(value) {
      return {
        '-webkit-transform': 'translate3d(0px, ' + value + 'px, 0px)',
        '-moz-transform': 'translate3d(0px, ' + value + 'px, 0px)',
        '-ms-transform': 'translate3d(0px, ' + value + 'px, 0px)',
        '-o-transform': 'translate3d(0px, ' + value + 'px, 0px)',
        'transform': 'translate3d(0px, ' + value + 'px, 0px)'
      };
    }
  };
});
