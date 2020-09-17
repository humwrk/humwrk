import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

enum State {
	'CREATED',
}

class ProjectSchema {
	@prop({ enum: State })
	state?: State
	@prop()
	body?: string
	@prop()
	specs?: string[]
	@prop()
	postedByUser?: string
	@prop()
	applicationCapatability?: number
	@prop()
	applications?: string[]
	@prop()
	assignes?: string
	@prop()
	isHourly?: boolean
	@prop()
	rate?: number
	@prop()
	budget?: number
	@prop()
	deadline?: Date
	@prop()
	isHumwrkMatch?: boolean
	@prop()
	isHumwrkPro?: boolean
	@prop()
	isHumwrkJunior?: boolean
}

const Project = getModelForClass(ProjectSchema)
export { Project }
