
# webpack 命令行的几种基本命令

1. webpack // 最基本的启动webpack方法
2. webpack -w // 提供watch方法，实时进行打包更新
3. webpack -p // 对打包后的文件进行压缩，提供production
4. webpack -d // 提供source map，方便调试。
├── src                 #开发目录
|       ├──assets           #存放静态资源
|   |       ├──datas        #存放数据 json 文件
|   |       ├──images       #存放图片资源文件
|   |       └──styles       #存放全局sass变量文件和reset文件
|       ├──lib
|   |   ├──components   #存放数据 模块组件 文件
|   |   |   └──Header
|   |   |       ├──Header.jsx
|   |   |       └──Header.scss
|   |   |     
|   |   └──utils        #存放utils工具函数文件
|   |
|       └──views
|           ├──Index        #入口文件
|       |      ├──Index.html #html文件
|       |      ├──Index.jsx  入口文件
|       |      └──Index.scss
|          └──Index2
   ├── dist                #发布目录
         |----dist            bundle
         |----js              common
   ├── node_modules        #包文件夹
   ├── .gitignore     
   ├── .jshintrc      
   ├── webpack.config.js   #webpack配置文件
   └── package.json
##   疑问
如何制定webpack require.ensure的路径，能否设置base路径。