2016/6/10  
es6引入无模块化框架的方法，如jquery，angular1  
import '../../lib/angular'；  
2016/6/19  
组件式编程，webpack 脚本会从/src/view 内的每个文件夹找出文件夹名[name].entry.js作为入口。  
自带模块化工具支持babel  
1. webpack // 最基本的启动webpack方法  
2. webpack -w // 提供watch方法，实时进行打包更新  
3. webpack -p // 对打包后的文件进行压缩，提供production  
4. webpack -d // 提供source map，方便调试。  
请不要使用自动保存  
2016/6/19  
demo  
使用方法  
将页面写入src/views的文件夹下，文件夹名与[name].entry.js 相同  
项目结构  
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
1.npm install   
2.webpack   