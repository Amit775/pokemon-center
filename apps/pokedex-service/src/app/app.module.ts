import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeService } from './services/type.service';
import { PokemonService } from './services/pokemon.service';
import { PrismaService } from './services/prisma.service';
import { TypeResolver } from './resolvers/type.resolver';
import { PokemonResolver } from './resolvers/pokemon.resolver';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			driver: ApolloDriver,
		}),
	],
	providers: [PrismaService, PokemonService, PokemonResolver, TypeService, TypeResolver],
})
export class AppModule {}
