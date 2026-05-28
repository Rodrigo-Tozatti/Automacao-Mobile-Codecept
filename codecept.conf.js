const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATAFORM,
      hostname: '127.0.0.1',
      port: 4723,
      path: '/',
      desiredCapabilities: {
        'platformName':                process.env.PLATAFORM,
        'appium:platformVersion':      process.env.VERSION,
        'appium:deviceName':           process.env.DEVICE,
        'appium:udid':                 process.env.UDID,
        'appium:automationName':       process.env.AUTOMATION,
        'appium:app':                  process.env.APP,
        'appium:appPackage':           process.env.PLATAFORM == 'Android' ? process.env.PACKAGE : '',
        'appium:appActivity':          process.env.PLATAFORM == 'Android' ? process.env.ACTIVITY : '',
        'appium:bundleId':             process.env.PLATAFORM == 'iOS' ? process.env.BUNDLE : '',
        'appium:noReset':              false,
        'appium:fullReset':            false,
        'appium:newCommandTimeout':    300,
        'appium:autoGrantPermissions': true,
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  noGlobals: true,
  plugins: {},
  name: 'Automacao-Mobile-Codecept'
}