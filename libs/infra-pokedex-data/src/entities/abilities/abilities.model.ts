import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import { PokemonAbilities } from '../pokemon-abilities/pokemon-abilities.model';
import { AbilitiesCount } from './abilities-count.output';

/**
 * @@TypeGraphQL.type(name: "Ability")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Ability")'})
export class Abilities {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;

    @Field(() => [PokemonAbilities], {nullable:true})
    pokemonAbilities?: Array<PokemonAbilities>;

    @Field(() => AbilitiesCount, {nullable:false})
    _count?: AbilitiesCount;
}
