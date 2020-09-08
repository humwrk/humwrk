import express from 'express'

import compression from 'compression'
import cors from 'cors'
import errorhandler from 'errorhandler'
import morgan from 'morgan'

import cfonts from 'cfonts'
import getport from 'get-port'
import signale from 'signale'

import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

import { HOST, isDevelopment, NODE_ENV, PORT, SENTRY_DSN } from '../../utils/env'

const app: express.Application = express()

Sentry.init({
	dsn: SENTRY_DSN,
	integrations: [
		// enable HTTP calls tracing
		new Sentry.Integrations.Http({ tracing: true }),
		// enable Express.js middleware tracing
		new Tracing.Integrations.Express({ app }),
	],
	tracesSampleRate: 1.0,
})

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler())
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler())

app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(compression())
if (isDevelopment) app.use(morgan('dev'))

app.get('/', function rootHandler(req, res) {
	res.end('Hello world!')
})

app.use(Sentry.Handlers.errorHandler())

app.use(function onError(err, req, res, next) {
	// The error id is attached to `res.sentry` to be returned
	// and optionally displayed to the user for support.
	res.statusCode = 500
	res.end(res.sentry + '\n')
})

export async function listen() {
	const automatedPORT = await getport({
		port: PORT,
	})

	app.listen(automatedPORT, () => {
		cfonts.say('Humwrk', {
			font: 'block',
			align: 'left',
		})
		signale.success(`(${NODE_ENV}) listening on http://${HOST}:${automatedPORT}`)
	})
}
