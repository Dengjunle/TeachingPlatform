

# 毕业设计

> A Vue.js project

## 安装目录

+ 创建vue cli2.0

  ```she
  vue init webpack "项目文件名"
  ```

  ```shell
  Project name (my-project) # 项目名称（我的项目，名称不能大写）
  
  Project description (A Vue.js project) # 项目描述一个Vue.js 项目
  
  Author 作者（你的名字）
  
  Install vue-router? (Y/n) # 是否安装Vue路由，也就是以后是spa（但页面应用需要的模块）
  
  Use ESLint to lint your code? (Y/n) # 使用 ESLint 到你的代码？ （Y [ yes ] / N [ no ]）
  
  Pick an ESLint preset (Use arrow keys) # 选择一个预置ESLint（使用箭头键）
  
  Setup unit tests with Karma + Mocha? (Y/n) # 设置单元测Karma + Mocha？ （Y/ N）
  
  Setup e2e tests with Nightwatch? (Y/n) # 设置端到端测试，Nightwatch？ （Y/ N）		
  ```

+ 安装需求

  ```shell
  # 安装element-ui 2.13.0
  npm install element-ui -S
  # 安装axios
  npm install axios
  # 安装vuex
  npm install vuex --save
  # 安装node-sass
  npm install node-sass
  # 安装sass-loader(sass版本太高了sass版本是8.0.0），在进行编译就会出现题干中的错)
  # 手动降低sass的版本
  npm install sass-loader@7.3.1
  ```

## 运行项目

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


