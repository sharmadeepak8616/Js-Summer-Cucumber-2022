WEBDRIVER-IO DOCS:
    https://webdriver.io/docs/gettingstarted

HELPFUL LINK:
    https://dzone.com/articles/webdriverio-integration-with-cucumber

EXECUTION:
    To run all feature files: npx wdio wdio.conf.js

    To run a specific feature file: npx wdio run wdio.conf.js --spec ./features-file-relative-path
    eg:
        npx wdio run wdio.conf.js --spec ./features/Facebook/login.feature

    To run a specific tag: npx wdio wdio.conf.js --cucumberOpts.tagExpression='@tag1'
    eg:
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-1'
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-2 or @login-3'
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-2 and @sanity'
        npx wdio wdio.conf.js --cucumberOpts.tagExpression 'not @login-1'

AUTO-COMPLETION:

    1. Create file jsconfig.json
    2. Link -> https://webdriver.io/docs/autocompletion
    3. Create jsconfig.json
    4. Add below code:
        {
            "compilerOptions": {
                "types": [
                    "node",
                    "webdriverio/async",
                    "@wdio/cucumber-framework"
                ]
            },
            "exclude": [
                "node_modules"
            ]
        }


CROSS-BROWSER TESTING:

    To install selenium-standalone:
        npm install @wdio/selenium-standalone-service --save-dev

    To add firefox-profile-services:
        npm install @wdio/firefox-profile-service --save-dev

    To use selenium-standalone as services:
        in wdio.conf.js:
                services: ['selenium-standalone'],

    To run testcases in cross-browser testing:
        in wdio.conf.js:
            capabilities: [{
                maxInstances: 5,
                browserName: 'chrome',
                acceptInsecureCerts: true
            },
            {
                maxInstances: 5,
                browserName: 'firefox',
                acceptInsecureCerts: true
            }],


ALLURE-REPORT:

    Add Allure Report:
        npm install @wdio/allure-reporter --save-dev
        npm install -g allure-commandline --save-dev

        in wdio.conf.js:
            reporters: ['spec',['allure', 
                            {
                                outputDir: './report/allure-results',
                                disableWebdriverStepsReporting: true,
                                useCucumberStepReporter: true,
                                disableWebdriverScreenshotsReporting: false,
                            }
                        ]
                    ],

    To generate Allure report:
        allure generate --clean <allure-results-path>
        eg: allure generate --clean ./reports/allure-results/

    To open allure report:
        allure open
        Note: make sure to be in the folder which contains allure-report

    To Attach screenshot on failure in report:
        in wdio.conf.js:
            in reporters array, make sure to add property
                disableWebdriverScreenshotsReporting: false

            in afterStep function (under Hooks):
                afterStep: async function (step, scenario, { error, duration, passed }, context) {
                    if(error) {
                        await browser.takeScreenshot();
                    }
                },