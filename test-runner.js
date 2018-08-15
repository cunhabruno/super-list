module.exports = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    browserName: 'chrome',

    pageObjects: [
        'test/page-objects'
    ],

    featureFiles : [
        'test/features/list-app.feature'
    ],

    stepDefinitions : [
        'test/features/step-definitions'
    ],

    //tags : '@positive or @negative',

    format : 'progress'
}