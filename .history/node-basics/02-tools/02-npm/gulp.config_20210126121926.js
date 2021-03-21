const { src, dest, series, parallel } = require('gulp')

function scripts() {
    return gulp.src('./03-scripts/app.js', { sourcemaps: true })
        .pipe(gulp.dest('./03-scripts/bundle.js'));
}