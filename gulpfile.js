var gulp = require('gulp'),
   pug = require('gulp-pug'),
   sass = require('gulp-sass'),
  
  
   browserSync = require('browser-sync').create();
  
   


  gulp.task('pug', function(){
      return gulp.src('pug/pages/*.pug')
      .pipe(pug({
          pretty: true
      }))
      .pipe(gulp.dest('build'));
  })

  gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
})


function browsersync() {
	browserSync.init({ 
		server: { baseDir: 'build/' }, 
		notify: false, 
		online: true 
	});
    
}
exports.browsersync = browsersync;

