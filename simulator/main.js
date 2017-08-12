import express from 'express'
import bodyParser from 'body-parser'
import ApiRouter from './api'

const app = express()

app.use(
	bodyParser.json(),
	bodyParser.urlencoded({
		extended: true
	})
)

// Add headers
app.use((req, res, next) => {
    // Client URL
	res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
	res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
	next()
})


app.use('/api', ApiRouter)

const port = 3003

app.listen(port, () => {
  console.log(`Api server start at port: ${port}`)
})
