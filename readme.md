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