const 	gulp = 			require("gulp"),
		autoprefixer = 	require("gulp-autoprefixer"),
		sass = 			require("gulp-sass"),
		bs = 			require("browser-sync"),
		rename = 		require("gulp-rename"),
		uglify = 		require("gulp-uglify"),
		concat = 		require("gulp-concat"),
		gulpCopy = 		require('gulp-copy'),
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

gulp.task('styles', function () {
	console.log("------- Сборка стилей");
	return gulp.src('./src/sass/*.scss')
	.pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./app/css'))
	.pipe(bs.stream());
});

gulp.task('copy', function () {
	console.log("------- Копирование index.html");
    	gulp.src('./src/*.html')
        .pipe(gulp.dest('./app'))
        .pipe(bs.stream());
});

gulp.task('libs', function() {
	console.log("------- Сборка js-библиотек");
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('scripts', function() {
	console.log("------- Сборка скриптов");
	return gulp.src('./src/js/main.js')
		.pipe(concat('main.js'))
		.pipe(uglify()) //Minify libs.js
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

gulp.task('default', ['copy','libs','scripts','fonts','bs','watch']);