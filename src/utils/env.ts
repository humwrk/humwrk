import dotenv from 'dotenv'
import { isDevelopmentCheck } from './env-helper'

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV! || 'development'
export const HOST = process.env.HOST! || 'localhost'
// eslint-disable-next-line radix
export const PORT = Number.parseInt(process.env.PORT!) || 3600

// Sentry Configuration
export const SENTRY_DSN = process.env.SENTRY_DSN!

// Auth0 Configuration
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!

// Algolia Configuration
export const ALGORIA_API = process.env.ALGORIA_API!

// Database Configuration
export const MONGODB_URI = process.env.MONGODB_URI! || 'mongodb://localhost'

// Object Storage Configuration
export const MINIO_HOST = process.env.MINIO_HOST! || 'localhost'
export const MINIO_PUBLICKEY = process.env.MINIO_PUBLICKEY!
export const MINIO_PRIVATEKEY = process.env.MINIO_PRIVATEKEY!

// ENV-based Lifecycle Variables
export const isDevelopment = isDevelopmentCheck()
