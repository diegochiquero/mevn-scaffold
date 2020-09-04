const webdriver = require('selenium-webdriver')
const mongoose = require('mongoose')
const config = require('../../../backend/config')

const conn = mongoose.createConnection(config.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

let {
	setWorldConstructor,
	setDefaultTimeout,
	AfterAll,
	BeforeAll,
	After
} = require('cucumber')
setDefaultTimeout(20 * 1000)

function CustomWorld() {
	this.driver = new webdriver.Builder().forBrowser('chrome').build()
}

BeforeAll(function() {
	conn.dropDatabase()
})

After(function() {
	if (this.driver != null) {
		return this.driver.quit()
	}
})

AfterAll(function() {
	conn.close()
})

setWorldConstructor(CustomWorld)
