import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';

@InputType()
export class PokemonStatsListRelationFilter {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    every?: Identity<PokemonStatsWhereInput>;

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    some?: Identity<PokemonStatsWhereInput>;

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    none?: Identity<PokemonStatsWhereInput>;
}
