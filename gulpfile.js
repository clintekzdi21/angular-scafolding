var gulp = require('gulp');
var browserSync = require('browser-sync');
var usemin = require('gulp-usemin');
var wrap = require('gulp-wrap');
var minifyCss = require('gulp-minify-css');
var minifyJs = require('gulp-uglify');
var concat = require('gulp-concat');
var path = require('path');


var paths = {
    styles: './styles/css/*.*',
    images: './images/**/*.*',
    scripts: './scripts/**/*.js',
    templates: './modules/**/*.html',
    // bower_components: './assets/bower_components/**/*.*',
    bower_fonts: './bower_components/**/*.{ttf,woff,woff2,eof,eot,svg}',
    index: 'index.html'
};


gulp.task('less', function() {
    return gulp.src('./styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./styles/css'));
});

gulp.task('clean', function() {
    gulp.src('dist').pipe(clean({ force: true }));
});


gulp.task('copy', function() {
    gulp.src(paths.index)
        .pipe(usemin({
            js: [minifyJs(), 'concat'],
            css: [minifyCss({
                keepSpecialComments: 0
            }), 'concat'],
            js1: [minifyJs(), 'concat']
        }))
        .pipe(gulp.dest('dist'))
    gulp.src([
            './bower_components/font-awesome/fonts/fontawesome-webfont.*',
            './bower_components/Ionicons/fonts/ionicons.*',
            './bower_components/bootstrap/fonts/*.*'
        ])
        .pipe(gulp.dest('dist/fonts'))
    gulp.src(paths.templates)
        .pipe(gulp.dest('dist/modules'))
    gulp.src(paths.images)
        .pipe(gulp.dest('dist/images'));
});



gulp.task('serve', function() {
    browserSync.init({
        notify: false,
        port: 9002,
        server: "./",
        ui: {
            port: 12345
        }
    });

    gulp.watch(['index.html', 'css/*.*', 'app/**/*.*', 'scripts/**/*.*'])
        .on('change', browserSync.reload);
});


gulp.task('dist', ['clean', 'copy']);
