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

    To Save screenshot on failure in a folder:
            in afterStep function (under Hooks):
                afterStep: async function ( { error } ) {
                    if(error) {
                        await browser.saveScreenshot('report/screenshots/Fail_' + moment().format('DD-MMM-YYYY-HH-MM-SS') + '.png');
                    }
                },


BROWSER-STACK SET UP:

    WebDriver-IO Docs:
        https://webdriver.io/docs/browserstack-service

    Browser Stack Docs:
        https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/webdriverio
        OR
        Refer "Quick Integration Guide" or "Get Started" after login
    
    CAPABILITIES REFERRAL:
        https://www.browserstack.com/automate/capabilities

    To Add Browser Stack:
        npm install @wdio/browserstack-service --save-dev
    
        in wdio.conf.js:
            exports.config
                // ...
                user: 'usernameFromBrowserStack',
                key: 'accessKeyFromBrowserStack,
                ...
                ...
                ...
                services: [
                    ['browserstack', {
                        preferScenarioName: true
                    }]
                ],
                ...
                ...
                capabilities: [{
                    maxInstances: 5,
                    browserName: 'chrome',
                    'bstack:options' : {
                        "os" : "Windows",
                        "osVersion" : "8",
                    },
                    acceptInsecureCerts: true
                },
                {
                    maxInstances: 5,
                    browserName: 'firefox',
                    'bstack:options' : {
                        "os" : "Windows",
                        "osVersion" : "11",
                    },
                    acceptInsecureCerts: true
                },
                {
                    maxInstances: 5,
                    browserName: 'edge',
                    'bstack:options': {
                        os: 'Windows',
                        osVersion: '11'
                    },
                    acceptInsecureCerts: true
                }],
                ...
                ...
                ...
            ],


JENKINS SET UP:

    Jenkins Web Portal:
        https://www.jenkins.io

    Verify if Java is in the machine:
        1. open terminal (Mac) or git bash (Windows)
        2. execute command: java -version
        3. If Java is not installed in machine, refer 
            for mac:
                https://medium.com/@kirebyte/using-homebrew-to-install-java-jdk11-on-macos-2021-4a90aa276f1c
            for windows:
                https://docs.oracle.com/goldengate/1212/gg-winux/GDRAD/java.htm#BGBFJHAB
        4. Go to https://www.jenkins.io/
        5. Tap on DOWNLOAD button
        6. Tap on respective operating system
        7. (for MAC) Open terminal, execute below commands :
                brew install jenkins-lts
                brew services start jenkins-lts
            (for WINDOWS), 
                Go to https://www.jenkins.io/download/
                Click on Windows option
                Follow steps from following screen
        8. Open "https://localhost:8080" in chrome window
        9.To Unlock Jenkins, perform below command in terminal:
            cat <filePath>
        10. Submit password in the Jenkins-window
        11. Create admin account
        12. Set up Jenkins with Suggested Plugins


Add NodeJS Plugin in the Jenkins
    Refer class recording using Manage Jenkins and Plugin Manager
    Search for NodeJS
    Add plugin
    Go to Global Tool Configuration
    Add NodeJs
    Configure Job
    Add Node (created in Global Tool Configuration) under Build Environment


Add Allure Plugin in the Jenkins
    Refer class recording using Manage Jenkins and Plugin Manager
    Search for allure
    Add plugin
    Go to Global Tool Configuration
    Add Allure


CUCUMBER AUTOCOMPLETE AND SD-link
    Install plugin: Cucumber (Gherkin) Full Support

To kill jobs running on a port:
    kill $(lsof -t -i:9515)
