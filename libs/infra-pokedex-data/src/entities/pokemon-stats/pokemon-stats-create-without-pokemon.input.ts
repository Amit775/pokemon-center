import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCreateNestedOneWithoutPokemonStatsInput } from '../stats/stats-create-nested-one-without-pokemon-stats.input';

@InputType()
export class PokemonStatsCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => StatsCreateNestedOneWithoutPokemonStatsInput, {nullable:false})
    stat!: StatsCreateNestedOneWithoutPokemonStatsInput;
}
