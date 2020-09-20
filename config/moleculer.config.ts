'use strict'
import { BrokerOptions, Errors, MetricRegistry, ServiceBroker } from 'moleculer'

/**
 * Moleculer ServiceBroker configuration file
 *
 * More info about options:
 *     https://moleculer.services/docs/0.14/configuration.html
 */

const brokerConfig: BrokerOptions = {
	namespace: 'main',
	nodeID: 'eu-cluster',
	// Custom metadata store. Store here what you want. Accessing: `this.broker.metadata`
	metadata: {},

	// Enable/disable logging or use custom logger. More info: https://moleculer.services/docs/0.14/logging.html
	// Available logger types: "Console", "File", "Pino", "Winston", "Bunyan", "debug", "Log4js", "Datadog"
	logger: {
		type: 'Console',
		options: {
			// Using colors on the output
			colors: true,
			// Print module names with different colors (like docker-compose for containers)
			moduleColors: false,
			// Line formatter. It can be "json", "short", "simple", "full", a `Function` or a template string like "{timestamp} {level} {nodeID}/{mod}: {msg}"
			formatter: 'short',
			// Custom object printer. If not defined, it uses the `util.inspect` method.
			objectPrinter: null,
			// Auto-padding the module name in order to messages begin at the same column.
			autoPadding: false,
		},
	},
	// Available values: trace, debug, info, warn, error, fatal
	logLevel: 'info',

	// More info: https://moleculer.services/docs/0.14/networking.html
	// In production you can set it via `TRANSPORTER=nats://localhost:4222` environment variable.
	transporter: null, //"NATS"

	// Define a cacher.
	// More info: https://moleculer.services/docs/0.14/caching.html
	cacher: 'Memory',

	// Define a serializer.
	// Available values: "JSON", "Avro", "ProtoBuf", "MsgPack", "Notepack", "Thrift".
	// More info: https://moleculer.services/docs/0.14/networking.html#Serialization
	serializer: 'JSON',

	requestTimeout: 10 * 1000,

	// More info: https://moleculer.services/docs/0.14/fault-tolerance.html#Retry
	retryPolicy: {
		enabled: true,
		retries: 5,
		delay: 100,
		maxDelay: 1000,
		factor: 2,
		check: (err: Errors.MoleculerError) => err && !!err.retryable,
	},

	// Limit of calling level. If it reaches the limit, broker will throw an MaxCallLevelError error. (Infinite loop protection)
	maxCallLevel: 100,

	// Number of seconds to send heartbeat packet to other nodes.
	heartbeatInterval: 10,
	// Number of seconds to wait before setting node to unavailable status.
	heartbeatTimeout: 30,

	// Cloning the params of context if enabled. High performance impact, use it with caution!
	contextParamsCloning: false,

	// Tracking requests and waiting for running requests before shuting down. More info: https://moleculer.services/docs/0.14/context.html#Context-tracking
	tracking: {
		// Enable feature
		enabled: false,
		// Number of milliseconds to wait before shuting down the process.
		shutdownTimeout: 5000,
	},

	// Disable built-in request & emit balancer. (Transporter must support it, as well.). More info: https://moleculer.services/docs/0.14/networking.html#Disabled-balancer
	disableBalancer: false,

	// Settings of Service Registry. More info: https://moleculer.services/docs/0.14/registry.html
	registry: {
		// Define balancing strategy. More info: https://moleculer.services/docs/0.14/balancing.html
		// Available values: "RoundRobin", "Random", "CpuUsage", "Latency", "Shard"
		strategy: 'RoundRobin',
		// Enable local action call preferring. Always call the local action instance if available.
		preferLocal: true,
	},

	// Settings of Circuit Breaker. More info: https://moleculer.services/docs/0.14/fault-tolerance.html#Circuit-Breaker
	circuitBreaker: {
		// Enable feature
		enabled: false,
		// Threshold value. 0.5 means that 50% should be failed for tripping.
		threshold: 0.5,
		// Minimum request count. Below it, CB does not trip.
		minRequestCount: 20,
		// Number of seconds for time window.
		windowTime: 60,
		// Number of milliseconds to switch from open to half-open state
		halfOpenTime: 10 * 1000,
		// A function to check failed requests.
		check: (err: Errors.MoleculerError) => err && err.code >= 500,
	},

	// Settings of bulkhead feature. More info: https://moleculer.services/docs/0.14/fault-tolerance.html#Bulkhead
	bulkhead: {
		// Enable feature.
		enabled: false,
		// Maximum concurrent executions.
		concurrency: 10,
		// Maximum size of queue
		maxQueueSize: 100,
	},

	// Enable action & event parameter validation. More info: https://moleculer.services/docs/0.14/validating.html
	validator: true,

	errorHandler: null,

	// Enable/disable built-in metrics function. More info: https://moleculer.services/docs/0.14/metrics.html
	metrics: {
		enabled: true,
		// Available built-in reporters: "Console", "CSV", "Event", "Prometheus", "Datadog", "StatsD"
		reporter: {
			type: 'StatsD',
			options: {
				// Server host
				host: 'localhost',
				// Server port
				port: 8125,
				// Maximum payload size.
				maxPayloadSize: 1300,
			},
		},
	},

	// Enable built-in tracing function. More info: https://moleculer.services/docs/0.14/tracing.html
	tracing: {
		enabled: false,
		// Available built-in exporters: "Console", "Datadog", "Event", "EventLegacy", "Jaeger", "Zipkin"
		exporter: {
			type: 'Zipkin', // Console exporter is only for development!
			options: {
				// Base URL for Zipkin server.
				baseURL: 'http://localhost:9411',
				// Sending time interval in seconds.
				interval: 5,
				// Additional payload options.
				payloadOptions: {
					// Set `debug` property in payload.
					debug: false,
					// Set `shared` property in payload.
					shared: false,
				},
				// Default tags. They will be added into all span tags.
				defaultTags: null,
			},
		},
	},

	// Register custom middlewares
	middlewares: [],

	// Register custom REPL commands.
	replCommands: null,
	/*
	// Called after broker created.
	created : (broker: ServiceBroker): void => {},
	// Called after broker started.
	started: async (broker: ServiceBroker): Promise<void> => {},
	stopped: async (broker: ServiceBroker): Promise<void> => {},
	 */
}

export = brokerConfig
