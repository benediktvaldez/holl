define([], function(){
  return function (path,speed,trans) {
    var length = path.getTotalLength();
    trans = typeof trans !== 'undefined' && trans !== '' ? trans : speed;

    path.style.transition = path.style.WebkitTransition = 'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+speed+' ease-in, fill '+trans+', stroke '+trans;

    path.style.strokeDashoffset = '0';

    setTimeout(function(){
      path.classList.add('done');
    },speed);
  };
});