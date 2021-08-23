const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
// const del = require('del');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
        
});

gulp.task('autoprefixer', () => {
    return gulp.src('./css/index.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'));
})
// gulp.task('clean', () => {
//     return del([
//         'css/main.css',
//     ]);
// });


gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['styles', 'autoprefixer'])(done);
        
    });
});



gulp.task('default', gulp.series(['watch']));