import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutPokemonStatsInput } from './stats-update-without-pokemon-stats.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutPokemonStatsInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;

    @Field(() => StatsUpdateWithoutPokemonStatsInput, {nullable:false})
    @Type(() => StatsUpdateWithoutPokemonStatsInput)
    data!: StatsUpdateWithoutPokemonStatsInput;
}
