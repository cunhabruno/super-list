const webdriver = require('selenium-webdriver');

module.exports = {
    'LISTAPPMAINPAGE' : {
        'ADDBUTTON' : webdriver.By.css('#add-button'),
        'ADDTOOLTIP' : webdriver.By.css('#tool-tip-add-button'),
        'SEARCH' : webdriver.By.id('search-input'),
        'LISTITEM': itemName => webdriver.By.xpath('//*[@test-data="list-item"][.="' + itemName + '"]')
    }
};