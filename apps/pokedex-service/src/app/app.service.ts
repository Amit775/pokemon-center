import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaService } from './services/prisma.service';
import { Pokemon } from '@prisma/client';

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}

	// TODO: Implement data seeding logic for your Pokemon database
	public insertPokemons(): Observable<Pokemon[]> {
		// This should implement your data seeding logic
		// For now, returning an empty array
		return new Observable((observer) => {
			observer.next([]);
			observer.complete();
		});
	}
}
