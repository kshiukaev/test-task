const 	gulp = require("gulp"),
		autoprefixer = require("gulp-autoprefixer"),
		sass = require("gulp-sass"),
		bs = require("browser-sync"),
		rename = require("gulp-rename"),
		uglify = require("gulp-uglify"),
		concat = require("gulp-concat"),
		gulpCopy = require('gulp-copy'),
		cleanCSS = require("gulp-clean-css");

gulp.task('bs', ['styles', 'scripts'], function() {
	bs.init({
		server: {
			baseDir: "./app"
		},
		notify: false
	});
});

gulp.task('styles', function () {
	return gulp.src('./src/sass/*.sass')
	.pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(bs.stream());
});
gulp.task('copy', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./app/'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('src/sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", bs.reload);
	gulp.watch('app/*.html').on('change', bs.reload);
});

gulp.task('default', ['copy','bs', 'watch']);