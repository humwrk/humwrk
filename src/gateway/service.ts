// import express from 'express'

import { Requester } from 'cote'

// import compression from 'compression'
// import cors from 'cors'
// import errorhandler from 'errorhandler'
// import morgan from 'morgan'

// import cfonts from 'cfonts'
// import getport from 'get-port'
// import signale from 'signale'

// import * as Sentry from '@sentry/node'
// import * as Tracing from '@sentry/tracing'

// import { HOST, isDevelopment, NODE_ENV, PKG_VERSION, PORT, SENTRY_DSN } from '../utilities/env'

// const app: express.Application = express()

// Sentry.init({
// 	dsn: SENTRY_DSN,
// 	// Read more about version configuration here: https://docs.sentry.io/product/releases/
// 	release: `humwrk@${PKG_VERSION}`,
// 	integrations: [
// 		// enable HTTP calls tracing
// 		new Sentry.Integrations.Http({ tracing: true }),
// 		// enable Express.js middleware tracing
// 		new Tracing.Integrations.Express({ app }),
// 	],
// 	tracesSampleRate: 1.0,
// })

// app.use(Sentry.Handlers.requestHandler())
// app.use(Sentry.Handlers.tracingHandler())

// app.disable('x-powered-by')
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cors())
// app.use(compression())
// if (isDevelopment) app.use(morgan('dev'))

// app.get('/', (req, res) => {
// 	res.json('Humwrk v0.0.1-alpha.0')
// })

// app.use(Sentry.Handlers.errorHandler())

// app.use(function onError(err, req, res, next) {
// 	res.statusCode = 500
// 	res.end(res.sentry + '\n')
// })

// async function listen() {
// 	const automatedPORT = await getport({
// 		port: PORT,
// 	})

// 	app.listen(automatedPORT, () => {
// 		cfonts.say('Humwrk', {
// 			font: 'block',
// 			align: 'left',
// 		})
// 		signale.success(`(${NODE_ENV}) listening on http://${HOST}:${automatedPORT}`)
// 	})
// }

// listen()

const requester = new Requester({ name: 'project requester' })
requester.send(
	{
		type: 'hello',
	},
	(e, res) => {
		console.log(res)
	}
)

async function makeres() {
	await requester.send({
		type: 'hello',
	})
}

makeres()
