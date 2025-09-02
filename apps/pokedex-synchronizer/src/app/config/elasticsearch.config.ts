import { ElasticsearchModuleOptions } from '@nestjs/elasticsearch';

export const elasticsearchConfig: ElasticsearchModuleOptions = {
	node: process.env.ELASTICSEARCH_NODE || 'http://localhost:9200',
	tls: {
		rejectUnauthorized: false, // Set to true in production with proper certificates
	},
	maxRetries: 3,
	requestTimeout: 10000,
	sniffOnStart: false,
};
