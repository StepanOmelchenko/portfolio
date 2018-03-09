const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const pug = require('gulp-pug');

const paths = {
    root: './build',
    templates: {
        pages: './src/templates/pages/*.pug'
    },
    styles: {
        main: './src/scss/main.scss',
        dest: './build/css'
    }
};

function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.root));
}

function styles() {
    return gulp.src(paths.styles.main)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest));
}

exports.scss = styles;
exports.pug = templates;