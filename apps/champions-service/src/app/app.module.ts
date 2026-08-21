import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { RegulationResolver } from './resolvers/regulation.resolver';

/**
 * The Champions API.
 *
 * Unlike `pokedex-service`, this API is **not** read-only — the advisor writes scouted teams,
 * battle sessions and observed sets. Do not run `tools/pokedex:cleanup` against this app; it
 * exists to strip mutation resolvers from the mainline reference API and would gut this one.
 */
@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'apps/champions-service/schema.gql',
			sortSchema: true,
			path: '/graphql',
		}),
	],
	providers: [PrismaService, RegulationResolver],
})
export class AppModule {}
