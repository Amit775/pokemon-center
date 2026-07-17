import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from '../stats/stats-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class PokemonStatsUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    effort?: number;

    @Field(() => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {nullable:true})
    stat?: Identity<StatsUpdateOneRequiredWithoutPokemonStatsNestedInput>;
}
