
module.exports = function(gulp) {

  gulp.task('scripts', function() {
    var gutil = gulp.plugin.util,
        prod  = gutil.env.prod,
        notifier = require('node-notifier'),
        map = require('map-stream'),
        lintFilter = gulp.plugin.filter(['!**/vendor/**/*']),
        jsFilter = gulp.plugin.filter(['**/*.js']),
        jsHintReporter;

    jsHintReporter = map(function (file, callback) {
      if (!file.jshint.success) {
        file.jshint.results.forEach(function (err) {
          if (err) {
            notifier.notify({
              title: 'JSHint: ' + err.file.split('/').pop(),
              subtitle: 'Line:' + err.error.line + '/Char:' + err.error.character + ' » ' + err.error.reason,
              message: err.error.evidence
            });
          }
        });
      }
      callback(null, file);
    });

    return gulp.src(['./src/js/**/*.js','./src/js/**/*.map'])
      .pipe( gulp.plugin.plumber() )
      .pipe( prod ? gutil.noop() : gulp.plugin.changed('./dev/js/') )
      .pipe( !prod ? gutil.noop() : jsFilter )

      .pipe( lintFilter )
      .pipe( gulp.plugin.jshint('./.jshintrc') )
      .pipe( jsHintReporter )
      .pipe( lintFilter.restore() )

      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe(
        !prod ? gutil.noop() : gulp.plugin.uglify({preserveComments: 'some'})
       )
      .pipe( gulp.dest(prod ? './dist/js/' : './dev/js/') )
      .pipe( !prod ? gutil.noop() : gulp.plugin.size() )
      .pipe( prod ? gutil.noop() : gulp.plugin.connect.reload() );
  });

};
