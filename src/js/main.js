(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      jquery: 'vendor/jquery.min',
      jqueryEasing: 'vendor/jquery.easing.min',
      drawPath: 'local-vendor/draw-path',
      css3: 'local-vendor/css3',
    },
    shim: {
      jquery: { exports: '$' },
      jqueryEasing: { deps: ['jquery'] },
      'vendor/form5-alignment.min': { deps: ['jquery'] },
    }
  });

  require([
    'vendor/form5-alignment.min',
    'local-vendor/smooth-scroll',
    'init',
    'hero',
    'nav',
  ]);
}).call(this);
