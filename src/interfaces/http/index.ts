import cfonts from 'cfonts'
import compression from 'compression'
import cors from 'cors'
import errorhandler from 'errorhandler'
import express from 'express'
import getport from 'get-port'
import morgan from 'morgan'
import signale from 'signale'
import { HOST, isDevelopment, NODE_ENV, PORT } from '../../utils/env'

export class InterfaceHTTP {
	public core: express.Application

	constructor() {
		this.core = express()
		this.middleware()
		this.errorHandling()
		this.routing()
		this.services()
	}

	public async listen() {
		const appPORT = await getport({
			port: PORT,
		})
		this.core.listen(appPORT, () => {
			cfonts.say('Humwrk', {
				font: 'block',
				align: 'left',
			})
			signale.success(`(${NODE_ENV}) listening on http://${HOST}:${appPORT}`)
		})
	}

	/** Configuration of middleware attached to Express Server. */
	private middleware() {
		this.core.disable('x-powered-by')
		this.core.use(express.json())
		this.core.use(express.urlencoded({ extended: false }))
		this.core.use(cors())
		this.core.use(compression())
		if (isDevelopment) this.core.use(morgan('dev'))
	}

	/** Private Method dedicated for configuring routing of application. */
	private routing() {}

	/** Error Handling Method, dedicated for services like Sentry. */
	private errorHandling() {
		if (isDevelopment)
			this.core.use(
				errorhandler({
					log: true,
				})
			)
	}

	/** Private method dedicated for running 3rd-party services that are
	 * required to run server. */
	private async services() {}
}
