const {Builder, By, Key, until} = require('selenium-webdriver');
const url = 'http://luqu.zhinengdayi.com/enroll/check'

(async function run(){
  let driver = new Builder()
  .forBrowser('chrome')
  // .setChromeOptions({})
  .build();

  try {
    // await driver.get('http://www.google.com/ncr');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google 搜索'), 1000);
    await driver.get(url)
    await driver

  } finally {
    // await driver.quit();  
  }
})()
