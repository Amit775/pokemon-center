import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PokemonType } from './entities/pokemon-type.entity';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonTypeService } from './services/pokemon-type.service';
import { PokemonService } from './services/pokemon.service';
import { PokemonTypeResolver } from './resolvers/pokemon-type.resolver';
import { PokemonResolver } from './resolvers/pokemon.resolver';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'bublileon',
			database: 'pokemondb',
			autoLoadEntities: true,
			synchronize: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			driver: ApolloDriver,
		}),
		TypeOrmModule.forFeature([Pokemon, PokemonType]),
	],
	providers: [PokemonService, PokemonResolver, PokemonTypeService, PokemonTypeResolver],
})
export class AppModule {}
