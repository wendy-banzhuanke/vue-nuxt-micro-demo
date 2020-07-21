# vue-nuxt-micro-demo

## 介绍案例
搭建主应用为vue， 子应用分别是vue / nuxt 项目

## 注意
#### 只需要在主应用安装qiankun即可
#### 主应用注册子模块
#### 子应用必须允许跨域访问（添加头信息）
#### nuxt项目中需要安装@femessage/nuxt-micro-frontend 来解决主应用于nuxt子应用通信问题，记得在config文件中加入相关配置