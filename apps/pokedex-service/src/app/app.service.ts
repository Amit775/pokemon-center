import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from './services/prisma.service';
import { Pokemon } from '@prisma/client';

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}
}
