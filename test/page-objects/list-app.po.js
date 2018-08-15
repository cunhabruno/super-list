const webdriver = require('selenium-webdriver');

module.exports = {
    'LISTAPPMAINPAGE' : {
        'ADDBUTTON' : webdriver.By.css('#add-button'),
        'ADDTOOLTIP' : webdriver.By.css('#tool-tip-add-button')
    }
};