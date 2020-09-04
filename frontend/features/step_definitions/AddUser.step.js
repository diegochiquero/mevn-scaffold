const { Given, When, Then } = require('cucumber')
const webdriver = require('selenium-webdriver')
const By = webdriver.By

Given('I am on a form page', function(next) {
	this.driver.get('http://localhost:8080/crud').then(next)
})

When('I fill First name field with {string}', function(string, next) {
	this.driver
		.findElement(By.xpath("//*[@data-testid='username-input']"))
		.sendKeys(string)
		.then(next)
})

When('I fill email field with {string}', function(string, next) {
	this.driver
		.findElement(By.xpath("//*[@data-testid='email-input']"))
		.sendKeys(string)
		.then(next)
})

When('I submit the form', function(next) {
	this.driver
		.findElement(By.xpath("//button[@type='submit']"))
		.click()
		.then(next)
})

Then('User is created', function(next) {
	const element = this.driver.findElement(By.css('button'))
	const actions = this.driver.actions({
		bridge: true
	})
	actions
		.click(element)
		.perform()
		.then(next)
})

//TODO: npm warning - save favorites
//! push
//? merge branch
