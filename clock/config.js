var config = {
  "username":"qbc",
  "pwd":"abc",
  "time": "0",
  "logPath": "log",
  "onDutyUrl": "http://localhost:9000/register?REGISTER_TYPE=1",
  "offDutyUrl": "http://localhost:9000/register?REGISTER_TYPE=2",
  "checkUrl": "http://localhost:9000/duty",
  "loginUrl": "http://localhost:9000/login",
}

if(process.env.NODE_ENV === 'production') {
  config.onDutyUrl = 'http://oa.dronggroup.com/general//attendance/personal/duty/submit.php?REGISTER_TYPE=1';  //上班
  config.offDutyUrl = "http://oa.dronggroup.com/general//attendance/personal/duty/submit.php?REGISTER_TYPE=2"; //下班
  config.checkUrl = "http://oa.dronggroup.com/general//attendance/personal/duty";
  config.loginUrl = "http://oa.dronggroup.com/logincheck.php";
}

console.log('config');

module.exports = config;
