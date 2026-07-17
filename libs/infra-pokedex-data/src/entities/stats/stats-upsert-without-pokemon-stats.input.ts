import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsUpdateWithoutPokemonStatsInput } from './stats-update-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutPokemonStatsInput } from './stats-create-without-pokemon-stats.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutPokemonStatsInput {

    @Field(() => StatsUpdateWithoutPokemonStatsInput, {nullable:false})
    @Type(() => StatsUpdateWithoutPokemonStatsInput)
    update!: StatsUpdateWithoutPokemonStatsInput;

    @Field(() => StatsCreateWithoutPokemonStatsInput, {nullable:false})
    @Type(() => StatsCreateWithoutPokemonStatsInput)
    create!: StatsCreateWithoutPokemonStatsInput;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;
}
