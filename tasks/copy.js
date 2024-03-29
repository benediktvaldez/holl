
module.exports = function(gulp) {

  gulp.task('copy', function() {
    var path = gulp.plugin.util.env.prod ? './dist' : './dev';

    gulp.src('./src/img/**/*.ico')
      .pipe( gulp.plugin.size() )
      .pipe( gulp.dest(path + '/img/') );
    gulp.src('./src/fonts/**')
      .pipe( gulp.plugin.size() )
      .pipe( gulp.dest(path + '/fonts/') );
    gulp.src('./src/videos/**')
      .pipe( gulp.plugin.size() )
      .pipe( gulp.dest(path + '/videos/') );
  });

};
