WEBDRIVER-IO DOCS:

    https://webdriver.io/docs/gettingstarted


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