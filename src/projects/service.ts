import cote from 'cote'

const staticData = [{ name: 'afsafds' }, { name: 'afsafds' }, { name: 'afsafds' }]

const projectResponder = new cote.Responder({
	name: 'ProjectResponder',
	namespace: 'project',
})

projectResponder.on('*', console.log)
projectResponder.on('hello', function (request, reply) {
	reply(null, staticData)
})
