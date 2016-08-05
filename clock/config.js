var config = {
  "username":"123",
  "pwd":"abc",
  "time": "0",
  "logPath": "log",
  "onDutyUrl": "http://oa.dronggroup.com/general//attendance/personal/duty/submit.php?REGISTER_TYPE=1",
  "offDutyUrl": "http://oa.dronggroup.com/general//attendance/personal/duty/submit.php?REGISTER_TYPE=2",
  "checkUrl": "http://oa.dronggroup.com/general//attendance/personal/duty",
  "loginUrl": "http://oa.dronggroup.com/logincheck.php",
}

if(process.env.NODE_ENV === 'development') {
  config.onDutyUrl = "http://localhost:9000/register?REGISTER_TYPE=1";  //上班
  config.offDutyUrl = "http://localhost:9000/register?REGISTER_TYPE=2"; //下班
  config.checkUrl = "http://localhost:9000/duty";
  config.loginUrl = "http://localhost:9000/login";
}

console.log('config');

module.exports = config;
