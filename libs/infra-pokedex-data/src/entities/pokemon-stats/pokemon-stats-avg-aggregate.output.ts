import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonStatsAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_id?: number;

    @Field(() => Float, {nullable:true})
    stat_id?: number;

    @Field(() => Float, {nullable:true})
    base_stat?: number;

    @Field(() => Float, {nullable:true})
    effort?: number;
}
