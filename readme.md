A sample Browserstack WDIO Test

### Installation

To begin using WebdriverIO, follow these steps:

Initialize a new npm project by running the following command and accepting the default options:

`npm init -y`

Install the WebdriverIO CLI tool globally by running the following command:

`npm install -g @wdio/cli`

Create a configuration file by running the following command, and follow the interactive setup process:

`npx wdio config`

Creating Tests, now that you have WebdriverIO set up, it's time to create your tests. Follow these steps:

- Create a test folder in your project directory to store your test files.
- Inside the test folder, create a specs subfolder to organize your test specifications.
- Add your test files in the specs folder. For example, you can create a test file like this:

`test/specs/e2e.test.js`

### Configuring and Running Tests

To configure and run your tests, follow these steps:

- Make changes to the wdio.conf.js file to specify the capabilities and the path to your test specs.
- Run your tests using the WebdriverIO CLI by executing the following command:
  `npx wdio wdio.conf.js`

#### Running Tests via npm Scripts:

You can also run your WebdriverIO tests using npm scripts. Update your package.json file to include the following scripts:

```
"scripts": {
  "test": "npx wdio wdio.conf.js"
}
```

With this configuration, you can run your tests using the following command:
`npm run test`

Alternatively, if you want to integrate Percy for visual testing, you can modify your package.json to include the Percy command:

```
"scripts": {
  "test": "percy exec -- npx wdio wdio.conf.js"
}
```

With this setup, you can run your tests with Percy using the same `npm run test` command.
