var gulp = require('gulp');
var browserify = require('browserify');
var gulpSass = require('gulp-sass');
var gulpUglify = require('gulp-uglify');
var fs = require('fs');
var htmlmin = require('gulp-htmlmin');

gulp.task('JSXtoJS', function () {
	return browserify('./source/js/app.jsx')
		.transform('babelify', {presets: ['react']})
		.bundle()
		.pipe(fs.createWriteStream('./build/js/app.js'));
});

gulp.task('SCSStoCSS', function () {
	return gulp.src('./source/sass/style.scss')
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest('./build/css/'));
});

gulp.task('minifyHtml', function () {
	return gulp.src('./source/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
	gulp.watch('./source/js/app.jsx', ['JSXtoJS']);
	gulp.watch('./source/sass/style.scss', ['SCSStoCSS']);
	gulp.watch('./source/index.html', ['minifyHtml']);
});

gulp.task('default', ['JSXtoJS', 'SCSStoCSS', 'minifyHtml', 'watch']);
