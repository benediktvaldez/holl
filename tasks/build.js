
module.exports = function(gulp) {

  gulp.task('build-dev', ['clean'], function() {
    return gulp.start('scripts', 'styles', 'templates', 'images', 'copy', 'bower');
  });

  gulp.task('build', function() {
    gulp.plugin.util.env.prod = true;
    return gulp.start('build-dev');
  });

};
