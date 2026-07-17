import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonGameIndicesAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_id?: number;

    @Field(() => Float, {nullable:true})
    version_id?: number;

    @Field(() => Float, {nullable:true})
    game_index?: number;
}
