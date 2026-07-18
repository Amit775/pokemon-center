import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { AbilityResolver, ItemResolver, SpeciesResolver, TypeResolver } from './resolvers/catalog.resolver';
import { MoveResolver } from './resolvers/move.resolver';
import { PokemonResolver } from './resolvers/pokemon.resolver';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			path: '/graphql',
		}),
	],
	providers: [PrismaService, PokemonResolver, MoveResolver, AbilityResolver, TypeResolver, ItemResolver, SpeciesResolver],
})
export class AppModule {}
