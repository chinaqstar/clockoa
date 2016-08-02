# clock

## run

```
$ npm install
$ npm run start // 运行正式环境
$ npm run build // 生成app
```

## setting

setting `clock/config.js`

    {
    "username":"your oa username",  //输入username
    "pwd":"your oa pwd", //输入密码
    "time":"0", // 0 或者 1 ---- 0是9:00上班，1是9：30上班
    "logPath": "log" //在./clock/log下可以查看程序运行时的日志
    }

    e.g.例
    {
    "username":"wangjue",
    "pwd":"123123",
    "time":"1",
    "logPath": "log"  
    }

## debug
模拟登陆接口，测试
```
#### terminal1，开启一个终端 ####
$ cd clockoa/test_server
$ npm install
$ node server.js

#### terminal2，再新开启一个终端 ####
$ cd clockoa
$ npm install
$ npm run debug
```

## package app
`npm run build`不一定能打包，下载速度太慢。

手动下载osx平台：electron-v0.36.0-darwin-x64.zip，win平台：electron-v0.36.0-win32-x64.zip

### Mac
```
$ cd clockoa
$ cp -r . ~/Downloads/electron-v0.36.0-darwin-x64/Electron.app/Contents/Resources/default_app
```

### Windows
```
$ cd clockoa
$ cp -r . ~/Downloads/electron-v0.36.0-win32-x64/resources/default_app

$ mv ~/Downloads/electron-v0.36.0-win32-x64/electron.exe ~/Downloads/electron-v0.36.0-win32-x64/clockoa.exe

$ cd ~/Downloads/
$ mv electron-v0.36.0-win32-x64 clockoa
$ zip -r clockoa clockoa
```
