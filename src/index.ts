import fastify from 'fastify'

const server = fastify()

server.get('/', async (req, res) => {
	return 'Hello World'
})

server.listen(1337, (err, address) => {
	if (err) {
		console.error(err)
	}
	console.log(`Server listening at ${address}`)
})
