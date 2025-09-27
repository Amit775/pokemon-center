import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { Abilities } from '../abilities/abilities.model';

/**
 * @@TypeGraphQL.type(name: "PokemonAbility")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonAbility")'})
export class PokemonAbilities {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => Abilities, {nullable:false})
    ability?: Abilities;
}
