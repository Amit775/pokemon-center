import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';

@InputType()
export class PokemonStatsListRelationFilter {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    every?: PokemonStatsWhereInput;

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    some?: PokemonStatsWhereInput;

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    none?: PokemonStatsWhereInput;
}
