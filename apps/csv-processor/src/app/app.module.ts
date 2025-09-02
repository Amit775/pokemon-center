import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvProcessorService } from './services/csv-processor.service';
import { PrismaService } from './services/prisma.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, CsvProcessorService, PrismaService],
})
export class AppModule {}
