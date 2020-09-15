import { NODE_ENV } from './env'

// Development ENV Management Scripts
export const isDevelopmentCheck = () => {
	if (NODE_ENV === 'development') return true
	return false
}
