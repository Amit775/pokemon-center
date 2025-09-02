import { Controller, Get } from '@nestjs/common';

import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { Pokemon } from '@prisma/client';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}
}
