import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonGameIndicesCountAggregate {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
