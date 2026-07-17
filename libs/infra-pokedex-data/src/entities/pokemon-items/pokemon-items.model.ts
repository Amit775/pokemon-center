import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import type { Identity } from 'identity-type';
import { Versions } from '../versions/versions.model';
import { Items } from '../items/items.model';

/**
 * @@TypeGraphQL.type(name: "PokemonItem")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonItem")'})
export class PokemonItems {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Identity<Pokemon>;

    @Field(() => Versions, {nullable:false})
    version?: Identity<Versions>;

    @Field(() => Items, {nullable:false})
    item?: Identity<Items>;
}
