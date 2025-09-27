import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { EggGroups } from '../egg-groups/egg-groups.model';

/**
 * @@TypeGraphQL.type(name: "PokemonEggGroup")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonEggGroup")'})
export class PokemonEggGroups {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => PokemonSpecies, {nullable:false})
    species?: PokemonSpecies;

    @Field(() => EggGroups, {nullable:false})
    eggGroup?: EggGroups;
}
