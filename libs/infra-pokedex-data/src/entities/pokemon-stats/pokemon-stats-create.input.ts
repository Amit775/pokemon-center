import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutStatsInput } from '../pokemon/pokemon-create-nested-one-without-stats.input';
import { StatsCreateNestedOneWithoutPokemonStatsInput } from '../stats/stats-create-nested-one-without-pokemon-stats.input';

@InputType()
export class PokemonStatsCreateInput {

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => PokemonCreateNestedOneWithoutStatsInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutStatsInput;

    @Field(() => StatsCreateNestedOneWithoutPokemonStatsInput, {nullable:false})
    stat!: StatsCreateNestedOneWithoutPokemonStatsInput;
}
