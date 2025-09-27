import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { PokemonHabitatsCount } from './pokemon-habitats-count.output';

/**
 * @@TypeGraphQL.type(name: "PokemonHabitat")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonHabitat")'})
export class PokemonHabitats {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonSpecies], {nullable:true})
    species?: Array<PokemonSpecies>;

    @Field(() => PokemonHabitatsCount, {nullable:false})
    _count?: PokemonHabitatsCount;
}
