const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const del = require('del');
const imagemin = require('gulp-imagemin');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();

const paths = {
    root: './build',
    templates: {
        pages: './src/templates/pages/*.pug'
    },
    styles: {
        main: './src/scss/main.scss',
        dest: './build/css'
    },
    images: {
        src: './src/img/**/*.*',
        dest: './build/img'
    },
    fonts: {
        src: './src/fonts/**/*.*',
        dest: './build/fonts'
    },
    scripts: {
        src: './src/lib/**/*.js',
        dest: './build/lib'
    }
};

function clear() {
    return del(paths.root);
}

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

function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin({                //сомнительный эффект 
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack({
            output: {
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            'presets': [
                                'env'
                            ]
                        }
                    }
                ]
            },
            mode: 'development'
        }, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

exports.scss = styles;
exports.pug = templates;
exports.img = images;
exports.delRoot = clear;
exports.fonts = fonts
exports.scripts = scripts;

gulp.task('default', gulp.series(
    clear,
    gulp.parallel(styles, templates, images, fonts, scripts)
));