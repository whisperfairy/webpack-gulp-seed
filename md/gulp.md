# Gulp
## gulp 环境配置

1. npm init
2. npm install -g gulp
3. npm install gulp --save
4. 新建gulpfile 文件
## helloworld
```
var gulp=require('gulp');
gulp.task("task1",[],function () {
   console.log('task 1'); 
});
gulp.task('task2',[],function () {
 console.log('task2');
});
gulp.task('default',['task1','task2'],function () {
    console.log(3);
})
```
## gulp 代码转换
    1. 安装 GULP 插件 
    2. npm install -g gulp-react gulp-babel babel-preset-es2015 gulp-less gulp-sass
    3. gulp-react reactjs 支持 
    4.  gulp-babel babel-preset-es2015 es6支持 2016为es7
    5.  gulp-less gulp-sass less sass 支持
   ##感觉不好用 多页面压缩