(function() {
  require.config({
    baseUrl: 'js',
    paths: {
      domReady: 'vendor/domReady',
      jquery: 'vendor/jquery.min',
      drawPath: 'local-vendor/draw-path',
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
  ]);
}).call(this);
