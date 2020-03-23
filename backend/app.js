/*
 * mevn-scaffold
 * 2020 Diego Chiquero Mena <chiquerodiego@gmail.com>
 * MIT Licensed
 */

require('dotenv').config()

const http = require('http')
	  path = require('path')
	  methods = require('methods')
	  express = require('express')
	  bodyParser = require('body-parser')
	  cors = require('cors')
	  errorhandler = require('errorhandler')
	  mongoose = require('mongoose')
	  config = require('config')

const isProduction = process.env.NODE_ENV === 'production' //boolean true or false

//Create global app object
const app = express()

app.use(cors())

//Middleware
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.use(require('method-override')())

//Models
require('./models/User')

//Routes
app.use(require('./routes'))

//TODO:

if (!isProduction) {
	app.use(errorhandler());
  }

//Database connection
if (isProduction) {
	//console.log(`Remote database: ${process.env.MONGODB_URL}`)
	mongoose.connect(process.env.MONGODB_URL, {	useNewUrlParser: true })
	// Static folder
	app.use(express.static(__dirname + '/public/'))
	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
} else {
	mongoose.connect(config.db, { useNewUrlParser: true })
	mongoose.set('debug', true)
	//console.log(`Local database:  ${config.db}`)
}
mongoose.set('useCreateIndex', true) //To avoid a deprecation warning

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found - No encontrado')
	err.status = 404
	next(err)
})

// development error handler
// will print stacktrace
if (!isProduction) {
	app.use((err, req, res, next) => {
		//console.log(err.stack)

		res.status(err.status || 500)

		res.json({
			'errors': {
				message: err.message,
				error: err
			}
		})
	})
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({
		'errors': {
			message: err.message,
			error: {}
		}
	})
})


//Finally let's start our server...
const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${server.address().port}`))
