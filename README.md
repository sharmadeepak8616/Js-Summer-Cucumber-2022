# Js-Summer-Cucumber-2022

To run all feature files: npx wdio wdio.conf.js

To run a specific feature file: npx wdio run wdio.conf.js --spec ./features-file-relative-path
eg:
    npx wdio run wdio.conf.js --spec ./features/Facebook/login.feature

To run a specific tag: npx wdio wdio.conf.js --cucumberOpts.tagExpression='@tag1 or @tag2'
eg:
    npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-1'
    npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-2 or @login-3'
    npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-2 and @sanity'
    npx wdio wdio.conf.js --cucumberOpts.tagExpression 'not @login-1'
