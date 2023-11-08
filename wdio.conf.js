const { default: $ } = require("webdriverio/build/commands/browser/$");

exports.config = {
  runner: "local",

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",

  services: [
    [
      "browserstack",
      {
        browserstackLocal: true,
        opts: {
          forcelocal: false,
        },
      },
    ],
  ],

  specs: ["test/specs/*.test.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,

  capabilities: [
    {
      browserName: "Chrome",
      "bstack:options": {
        browserVersion: "103.0",
        os: "Windows",
        osVersion: "11",
      },
    },
    // {
    //   browserName: "Firefox",
    //   "bstack:options": {
    //     browserVersion: "102.0",
    //     os: "Windows",
    //     osVersion: "10",
    //   },
    // },
    // {
    //   browserName: "Safari",
    //   "bstack:options": {
    //     browserVersion: "14.1",
    //     os: "OS X",
    //     osVersion: "Big Sur",
    //   },
    // },
  ],
  commonCapabilities: {
    "bstack:options": {
      buildName: "bstack-demo-wdio",
      buildIdentifier: "#${BUILD_NUMBER}",
      projectName: "wdio-local-sample",
      debug: "true",
      networkLogs: "true",
      consoleLogs: "info",
    },
  },

  logLevel: "info",
  bail: 0,
  baseUrl: "https://www.bstackdemo.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});
