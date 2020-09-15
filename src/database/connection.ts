import mongoose, { connection as c } from 'mongoose'
import s from 'signale'
import { NODE_ENV } from 'utilities/env'

const logger = s.scope('mongoose')
if (NODE_ENV === 'CI' || NODE_ENV === 'production') logger.disable()

export default async function mongodb(URI: string) {
	// State/Error Handling
	c.on('connected', () => {
		logger.success('Connected to database')
	})
	c.on('reconnected', () => {
		logger.success('Reconnected to database')
	})
	c.on('disconected', () => {
		logger.warn('Disconected from database.')
		logger.info('Reconnecting to database...')
		setTimeout(async () => {
			await mongoose.connect(URI, {
				keepAlive: true,
				socketTimeoutMS: 3000,
				connectTimeoutMS: 3000,
				useUnifiedTopology: true,
				useNewUrlParser: true,
			})
		}, 3000)
	})
	c.on('close', () => {
		logger.log('Connection closed.')
	})
	c.on('error', (e) => {
		logger.error('Database error \n', e)
	})

	// Create connection from URI Parameter
	const connection = await mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	return connection
}
