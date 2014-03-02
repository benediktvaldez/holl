define(['drawPath','jquery'], function(drawPath) {

  var nav = document.querySelector('nav.top'),
      logo = document.querySelector('svg.logo'),
      logoHollPaths = logo.querySelectorAll('.holl path'),
      phone = document.querySelector('svg.phone'),
      phonePaths = phone.querySelectorAll('path'),
      blueprint = document.querySelector('svg.blueprint'),
      blueprintPaths = blueprint.querySelectorAll('path'),
      speed = getComputedStyle(document.querySelector('hero'))['transition-delay'];

  $(document).one('full-window-height',function(){
    speed = typeof speed !== 'number' ? parseFloat(speed) * 1000 : speed;

    $.each(logoHollPaths, function(index,path) {
      drawPath(path,speed);
    });

    setTimeout(function(){
      logo.classList.add('done');
    },speed*4);

    setTimeout(function(){
      phone.classList.add('active');
      $.each(phonePaths, function(index,path) {
        drawPath(path,speed);
      });
      nav.classList.add('active');
    },speed*6);

    triggerBlueprint(blueprint,blueprintPaths,60000);
  });

  var triggerBlueprint = function(blueprint,blueprintPaths,speed) {
    blueprint.classList.add('active');
    $.each(blueprintPaths, function(index,path) {
      drawPath(path,speed);
    });
    setTimeout(function(){
      var delay = getComputedStyle(blueprint)['transition-duration'];
      delay = typeof delay !== 'number' ? parseFloat(delay) * 1000 : delay;
      blueprint.classList.remove('active');

      setTimeout(function(){
        triggerBlueprint(blueprint,blueprintPaths,speed);
      },delay);
    },speed);
  };

});
