import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutPokemonStatsInput } from './stats-update-without-pokemon-stats.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutPokemonStatsInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;

    @Field(() => StatsUpdateWithoutPokemonStatsInput, {nullable:false})
    @Type(() => StatsUpdateWithoutPokemonStatsInput)
    data!: Identity<StatsUpdateWithoutPokemonStatsInput>;
}
