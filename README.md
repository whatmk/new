# mk-demo

该demo是使用mk框架创建的一个demo

## 环境准备

- nodejs最新版
- npm最新版
- chrome

## start

```
$ npm install
$ npm start
http://127.0.0.1:8089
```

## 可能遇到的问题

- 如果npm start报错not found module
```
$ npm cache clean --force
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm install
```

- 2017.9.27 react v16.0.0版本发布

```
//这之前clone的版本npm update后可能会出现各种问题，请按下面步骤修复

$ git pull //更新最新的demo代码，或者重新clone一份
$ npm i -g mk-tools
$ npm cache clean --force
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm install
$ npm start


```
