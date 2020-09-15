import mongoose from 'mongoose'
import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

enum State {
	'CREATED',
}

@modelOptions({
	options: {
		customName: 'Projects',
	},
})
class ProjectSchema {
	@prop({ enum: State })
	state?: State
	@prop()
	body?: string
	@prop()
	specs?: string
	@prop()
	postedBy?: string
	@prop()
	applicationLimit?: number
	@prop()
	// TODO: This should refer to other service which
	// will be responsible for applications.
	applications?: string
	@prop()
	assignes?: string[]
	@prop()
	isHourly?: number
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

export const Project = getModelForClass(ProjectSchema)
