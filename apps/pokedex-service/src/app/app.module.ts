import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LanguageService } from './language.service';
import { PrismaService } from './prisma.service';
import { AbilityResolver, ItemResolver, SpeciesResolver, TypeResolver } from './resolvers/catalog.resolver';
import { AnalysisResolver } from './resolvers/analysis.resolver';
import { ContextResolver } from './resolvers/context.resolver';
import { DepthResolver } from './resolvers/depth.resolver';
import { MoveResolver } from './resolvers/move.resolver';
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { SearchResolver } from './resolvers/search.resolver';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'apps/pokedex-service/schema.gql',
			sortSchema: true,
			path: '/graphql',
		}),
	],
	providers: [
		PrismaService,
		LanguageService,
		PokemonResolver,
		MoveResolver,
		AbilityResolver,
		TypeResolver,
		ItemResolver,
		SpeciesResolver,
		ContextResolver,
		SearchResolver,
		DepthResolver,
		AnalysisResolver,
	],
})
export class AppModule {}
