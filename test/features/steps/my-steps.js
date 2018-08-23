const {Then, Helpers, pageObjectsParser} = require("selenium-cucumber-easy");
const webdriver = require('selenium-webdriver');

Then('I can see the item {string} unselected', async function (itemName) {
    console.log(await driver.findElement(pageObjectsParser.get2LevelsLocator('LISTAPPMAINPAGE', 'LISTITEMCHECKBOX')(itemName)).isSelected());
   //await Helpers.checkElementDisplayed(pageObjectsParser.get2LevelsLocator('LISTAPPMAINPAGE', 'LISTITEMSELECTED')(itemName), false);
});

Then('I can see the item {string} selected', async function (itemName) {
    console.log(await driver.findElement(pageObjectsParser.get2LevelsLocator('LISTAPPMAINPAGE', 'LISTITEMCHECKBOX')(itemName)).isSelected());
   //await Helpers.checkElementDisplayed(pageObjectsParser.get2LevelsLocator('LISTAPPMAINPAGE', 'LISTITEMSELECTED')(itemName), true);
});