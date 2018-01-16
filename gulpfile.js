var gulp = require('gulp');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
  gulp.src('js/src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js/dist'))
});
