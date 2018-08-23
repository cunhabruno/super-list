module.exports = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    baseAppUrl: 'http://localhost:3000/',

    browserName: 'chrome',

    pageObjects: [
        'test/page-objects'
    ],

    featureFiles : [
        'test/features/list-app.feature'
    ],

    stepDefinitions : [
        'test/features/steps'
    ],

    //tags : '@positive or @negative',

    format : 'progress'
};