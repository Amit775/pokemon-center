import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

// Services
import { PrismaService } from './services/prisma.service';
import { PokemonService } from './services/pokemon.service';
import { TypeService } from './services/type.service';
import { MoveService } from './services/move.service';
import { AbilityService } from './services/ability.service';
import { ItemService } from './services/item.service';
import { StatService } from './services/stat.service';
import { DamageClassService } from './services/damage-class.service';

// Resolvers
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { TypeResolver } from './resolvers/type.resolver';
import { MoveResolver } from './resolvers/move.resolver';
import { AbilityResolver } from './resolvers/ability.resolver';
import { ItemResolver } from './resolvers/item.resolver';
import { StatResolver } from './resolvers/stat.resolver';
import { DamageClassResolver } from './resolvers/damage-class.resolver';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			driver: ApolloDriver,
		}),
	],
	providers: [
		PrismaService,
		PokemonService,
		TypeService,
		MoveService,
		AbilityService,
		ItemService,
		StatService,
		DamageClassService,
		PokemonResolver,
		TypeResolver,
		MoveResolver,
		AbilityResolver,
		ItemResolver,
		StatResolver,
		DamageClassResolver,
	],
})
export class AppModule {}
