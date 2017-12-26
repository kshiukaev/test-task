"use strict";

const 	gulp = 			require("gulp"),
		autoprefixer = 	require("gulp-autoprefixer"),
		sass = 			require("gulp-sass"),
		bs = 			require("browser-sync"),
		rename = 		require("gulp-rename"),
		uglify = 		require("gulp-uglify"),
		concat = 		require("gulp-concat"),
		gulpCopy = 		require('gulp-copy'),
		sourcemaps =		require('gulp-sourcemaps'),
		cleanCSS = 		require("gulp-clean-css");

gulp.task('bs', ['styles', 'scripts'], function() {
	console.log("------- Запуск сервера");
	bs.init({
		server: {
			baseDir: "./app"
		},
		notify: false
	});
});

gulp.task('css-libs', function () {
	console.log("------- Сборка библиотек стилей");
	return gulp.src([
		// './node_modules/formstone/dist/css/themes/light.css',
		// './node_modules/formstone/dist/css/themes/light/dropdown.css'
		'./Selectric/public/selectric.css'
		])
	.pipe(sourcemaps.init())
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/css'))
	.pipe(bs.stream());
});


gulp.task('styles', function () {
	console.log("------- Сборка стилей");
	return gulp.src('./src/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/css'))
	.pipe(bs.stream());
});

gulp.task('copy', function () {
	console.log("------- Копирование index.html");
    	gulp.src('./src/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(bs.stream());
});

gulp.task('js-libs', function() {
	console.log("------- Сборка библиотек скриптов");
	return gulp.src([
			'./bower_components/jquery/dist/jquery.js',
			'./bower_components/jquery-ui/jquery-ui.js',
			'./Selectric/public/jquery.selectric.js',
			// './node_modules/formstone/dist/js/core.js',
			// './node_modules/formstone/dist/js/touch.js',
			// './node_modules/formstone/dist/js/scrollbar.js',
			// './node_modules/formstone/dist/js/dropdown.js'
			])
		.pipe(sourcemaps.init())
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/js/'))
		.pipe(bs.stream());
});
gulp.task('scripts',['js-libs'], function() {
	console.log("------- Сборка скриптов");
	return gulp.src('./src/js/main.js')
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/js/'))
		.pipe(bs.stream());
});

gulp.task('fonts', function () {
  console.log('---------- Копирование шрифтов');
  return gulp.src('./src/fonts/*.{ttf,woff,woff2,eot,svg}')
    .pipe(gulp.dest('./app/fonts/'));
});
gulp.task('watch', function () {
	console.log("------- Слежение за изменениями");
	gulp.watch('./src/sass/*.scss', ['styles']);
	gulp.watch('./app/libs/**/*.js', ['libs']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./src/*.html', ['copy']);
});

gulp.task('default', ['copy','css-libs','js-libs','scripts','fonts','bs','watch']);