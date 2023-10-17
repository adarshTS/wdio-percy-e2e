Get Started using WebdriverIO:

npm init -y
npm install @wdio/cli
npx wdio config

Creating tests:
Create a test folder and a specs sub folder
Add your test files here eg: test/specs/e2e.test.js

Running tests:
Make changes to wdio.conf.js: add capabilities and specifiy spec path
Run command: npx wdio wdio.conf.js (functional CLI command)

in package.json script: npm run test.
"test": "percy exec -- wdio"
"test": "wdio"
