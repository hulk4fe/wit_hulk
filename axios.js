const axios = require('axios');
const FormData = require("form-data");
// const FormData = require('form-data');

const form = new FormData();
const data = {
  'sCode': 'wit',
  'KSH': 'BwLtwISfvI7mV6UFFGIW6Q==',
  'XM': 'BwLtwISfvI7mV6UFFGIW6Q==',
  'authCode': '4452'
}

Object.keys(data).forEach(el => {
  form.append(el, data[el])
})
// console.log(form)
// form.submit('http://luqu.zhinengdayi.com/enroll/check', ( err, res)=>{
//   console.log(err, res)
// })
// axios.create({
//   headers: {
//     // ...form.getHeaders(),
//     'X-Requested-With': 'XMLHttpRequest',
//     'Host': 'luqu.zhinengdayi.com',
//     'Connection': 'keep-alive',
//     'Content-Length': 85,
//     'Pragma': 'no-cache',
//     'Cache-Control': 'no-cache',
//     'Accept': '*/*',
//     'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'Origin': 'http://luqu.zhinengdayi.com',
//     'Referer': 'http://luqu.zhinengdayi.com/loginPage?sCode=wit',
//     'Accept-Encoding': 'gzip, deflate',
//     'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
//     'Cookie': 'JSESSIONID=477993896728143854590AAD156E3624'}
// }).post('http://luqu.zhinengdayi.com/enroll/check', form).then(res => {
//   // console.log('res', res)
// })
function encodeSerialize(data) {
  return Object.keys(data)
    .map(key => key + "=" + encodeURIComponent(data[key]))
    .join("&");
}

axios.post('http://luqu.zhinengdayi.com/enroll/check', encodeSerialize({
  'sCode': 'wit',
  'KSH': 'BwLtwISfvI7mV6UFFGIW6Q==',
  'XM': 'BwLtwISfvI7mV6UFFGIW6Q==',
  'authCode': 8370
}), {
  // withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Host': 'luqu.zhinengdayi.com',
    'Connection': 'keep-alive',
    'Content-Length': 85,
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'http://luqu.zhinengdayi.com',
    'Referer': 'http://luqu.zhinengdayi.com/loginPage?sCode=wit',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cookie': 'JSESSIONID=477993896728143854590AAD156E3624'
  }
}).then(res => {
  console.log('res', res)
})