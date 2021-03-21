const { src, dest, series, parallel } = require('gulp')

function scripts() {
    return src('./03-scripts/app.js', { sourcemaps: true })
        .pipe(dest('./03-scripts/dist/'));
}

var build = series(scripts);

exports.default = build;