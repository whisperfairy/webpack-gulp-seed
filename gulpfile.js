
'use strict';

let gulp = require('gulp')
let webpack = require('webpack')



let webpackConf = require('./webpack.config')
// let webpackDevConf = require('./webpack-dev.config')


// run webpack pack
gulp.task('pack', (done) => {
    webpack(webpackConf, (err, stats) => {
        done()
    })
})

// html process
gulp.task('default', ['pack'])
/*gulp.task('default', ['pack'], () => {
 let replace = require('gulp-replace')
 let htmlmin = require('gulp-htmlmin')
 return gulp
 .src(assets + '/*.html')
 // @see https://github.com/kangax/html-minifier
 .pipe(htmlmin({
 collapseWhitespace: true,
 removeComments: true
 }))
 .pipe(gulp.dest(assets))
 })*/

// deploy assets to remote server
// gulp.task('deploy', () => {
//     let sftp = require('gulp-sftp')
//
//     return gulp.src(assets + '/**')
//         .pipe(sftp({
//             host: '[remote server ip]',
//             remotePath: '/www/app/',
//             user: 'foo',
//             pass: 'bar'
//         }))
// })