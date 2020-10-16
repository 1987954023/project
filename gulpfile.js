const gulp = require('gulp');
const connect = require('gulp-connect');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')
const htmlmin = require('gulp-htmlmin');
sass.compiler = require('node-sass')
//拷贝html代码
gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(htmlmin({
            removeEmptyAttibutes: true, // 移出所有空属性
            collapseWhitespace: true, // 压缩 html
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
})
//处理图片
gulp.task('images', function () {
    return gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())
})
//处理js文件
gulp.task('scripts', function () {
    return gulp.src(['*.js', '!gulpfile.js'])
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
})
//处理数据源
gulp.task('data', function () {
    return gulp.src('data/*.json')
        .pipe(gulp.dest('dist/data'))
        .pipe(connect.reload())
})
//处理css样式
gulp.task('index', function () {
    return gulp.src('./stylesheet/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('room', function () {
    return gulp.src('./stylesheet/room.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('room.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('goods', function () {
    return gulp.src('./stylesheet/goods.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('goods.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('product', function () {
    return gulp.src('./stylesheet/product.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('product.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('car', function () {
    return gulp.src('./stylesheet/car.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('car.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('logo', function () {
    return gulp.src('./stylesheet/logo.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('logo.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
gulp.task('login', function () {
    return gulp.src('./stylesheet/login.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('login.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})
//处理php文件
gulp.task('php', function () {
    return gulp.src('*.php')
        .pipe(gulp.dest('dist/php/'))
        .pipe(connect.reload())
})
//监听字体图标库
gulp.task('font', function () {
    return gulp.src('font_4kopfnw6wj5/**/*')
        .pipe(gulp.dest('dist/font_4kopfnw6wj5'))
        .pipe(connect.reload())
})

gulp.task('build', ['html', 'images', 'scripts', 'data', 'index', 'font', 'room', 'goods','product','car','logo','login','php'])

//编写监听
gulp.task('watch', function () {
    gulp.watch('*.html', ['html'])
    gulp.watch('images/**/*', ['images'])
    gulp.watch(['*.js', '!gulpfile.js'], ['scripts'])
    gulp.watch('./stylesheet/index.scss', ['index'])
    gulp.watch('font_4kopfnw6wj5/**/*', ['font'])
    gulp.watch('./stylesheet/room.scss', ['room'])
    gulp.watch('data/*.json', ['data'])
    gulp.watch('./stylesheet/goods.scss', ['goods'])
    gulp.watch('./stylesheet/product.scss',['product'])
    gulp.watch('./stylesheet/car.scss',['car'])
    gulp.watch('./stylesheet/logo.scss',['logo'])
    gulp.watch('./stylesheet/login.scss',['login'])
    gulp.watch('*.php',['php'])
})
gulp.task('server', function () {
    connect.server({
        root: 'dist',
        port: 8888,
        livereload: true
    })
})
//同时启动服务和监听

gulp.task("default", ['watch', 'server']);