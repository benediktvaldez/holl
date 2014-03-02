define(['drawPath','jquery'], function(drawPath) {

  $(document).one('full-window-height',function(){

    var nav = document.querySelector('nav.top'),
        hero = document.querySelector('hero'),
        logo = hero.querySelector('svg.logo'),
        logoHollPaths = logo.querySelectorAll('.holl path'),
        phone = hero.querySelector('svg.phone'),
        phonePaths = phone.querySelectorAll('path'),
        blueprint = hero.querySelector('svg.blueprint'),
        blueprintPaths = blueprint.querySelectorAll('path'),
        speed = getComputedStyle(hero)['transition-delay'];
    speed = typeof speed !== 'number' ? parseFloat(speed) * 1000 : speed;

    $.each(logoHollPaths, function(index,path) {
      drawPath(path,speed);
    });

    setTimeout(function(){
      logo.classList.add('done');
    },speed*8);

    setTimeout(function(){
      phone.classList.add('active');
      $.each(phonePaths, function(index,path) {
        drawPath(path,speed);
      });
      nav.classList.add('active');
    },speed*10);

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
