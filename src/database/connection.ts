import mongoose, { connection as c } from 'mongoose'

export default async function mongodb(URI: string) {
	// State/Error Handling
	c.on('connected', () => {})
	c.on('reconnected', () => {})
	c.on('disconected', () => {})
	c.on('close', () => {})
	c.on('error', () => {})

	// Create connection from URI Parameter
	const connection = await mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	return connection
}
