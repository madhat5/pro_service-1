var     gulp        = require('gulp'),
        uglifycss   = require('gulp-uglifycss'),
        uglify      = require('gulp-uglify'),
        pump        = require('pump'),
        zip         = require('gulp-zip'),
        notify      = require("gulp-notify"),
        plumber     = require('gulp-plumber'),
        coffee      = require('gulp-coffee');
        browserSync = require('browser-sync');

var reload      = browserSync.reload;

var plumberErrorHandler = { errorHandler: notify.onError({
  title: 'Gulp',
  message: 'Error: <%= error.message %>'
  })
};

gulp.task('default', function(){
    console.log('default gulp task...')
});

// CSS Minification
gulp.task('css', function () {
  gulp.src('./wp-content/themes/illdy/layout/css/*.css')
    .pipe(plumber(plumberErrorHandler))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./wp-content/themes/illdy/layout/css/'));
    .pipe(notify({ message: 'CSS minification complete', onLast: true }));
});

// JS Minification
gulp.task('js', function (cb) {
  pump([
        gulp.src('./wp-content/themes/illdy/layout/**/*.js'),
        .pipe(plumber(plumberErrorHandler))
        uglify(),
        gulp.dest('./wp-content/themes/illdy/layout/**/*.js')
        .pipe(notify({ message: 'JS minification complete', onLast: true }));
    ],
    cb
  );
});

// Zip task
gulp.task('default', () =>
	gulp.src('wp-content/*')
		.pipe(zip('WP_ProService-1.zip'))
		.pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Source zipped', onLast: true }));
);

// Default
gulp.task('default', ['css', 'js']);

// Watch task
gulp.task('watch', function() {
  gulp.watch('./wp-content/themes/illdy/layout/css/*.css', ['css']);
  gulp.watch('./wp-content/themes/illdy/layout/**/*.js', ['js', 'browserSync.reload']);
});
