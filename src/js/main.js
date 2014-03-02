(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      jquery: 'vendor/jquery.min',
      drawPath: 'local-vendor/draw-path',
      css3: 'local-vendor/css3',
    },
    shim: {
      jquery: { exports: '$' },
      'vendor/form5-alignment.min': { deps: ['jquery'] },
    }
  });

  require([
    'vendor/form5-alignment.min',
    'init',
    'hero',
    'nav',
  ]);
}).call(this);
