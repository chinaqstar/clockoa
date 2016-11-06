var config = {
  "username":"xxx",
  "pwd":"xxxx",
  "cookie": {
    USER_NAME_COOKIE: "xxxx",
    PHPSESSID: "xxxx",
    OA_USER_ID: "xxx"
  },
  "time": "0",
  "logPath": "log",
  "onDutyUrl": "http://xxx.xxx.xxx/general/attendance/personal/duty/submit.php?REGISTER_TYPE=1",
  "offDutyUrl": "http://xxx.xxx.xxx/general/attendance/personal/duty/submit.php?REGISTER_TYPE=2",
  "checkUrl": "http://xxx.xxx.xxx/general/attendance/personal/duty",
  "loginUrl": "http://xxx.xxx.xxx/logincheck.php",
}

if(process.env.NODE_ENV === 'development') {
  config.onDutyUrl = "http://localhost:9000/register?REGISTER_TYPE=1";  //上班
  config.offDutyUrl = "http://localhost:9000/register?REGISTER_TYPE=2"; //下班
  config.checkUrl = "http://localhost:9000/duty";
  config.loginUrl = "http://localhost:9000/login";
}

module.exports = config;
