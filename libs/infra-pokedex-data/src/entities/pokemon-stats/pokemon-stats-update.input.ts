import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from '../pokemon/pokemon-update-one-required-without-stats-nested.input';
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from '../stats/stats-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class PokemonStatsUpdateInput {

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    effort?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutStatsNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutStatsNestedInput>;

    @Field(() => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {nullable:true})
    stat?: Identity<StatsUpdateOneRequiredWithoutPokemonStatsNestedInput>;
}
