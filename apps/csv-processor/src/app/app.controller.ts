import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CsvProcessorService } from './services/csv-processor.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly csvProcessorService: CsvProcessorService,
	) {}

	@Get()
	getData() {
		return this.appService.getData();
	}

	@Post('process-csv')
	async processCsv(): Promise<{ message: string }> {
		await this.csvProcessorService.processAllCsvFiles();
		return { message: 'CSV processing completed' };
	}
}
