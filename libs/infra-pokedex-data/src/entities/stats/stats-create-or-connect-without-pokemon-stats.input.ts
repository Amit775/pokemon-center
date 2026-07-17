import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutPokemonStatsInput } from './stats-create-without-pokemon-stats.input';

@InputType()
export class StatsCreateOrConnectWithoutPokemonStatsInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutPokemonStatsInput, {nullable:false})
    @Type(() => StatsCreateWithoutPokemonStatsInput)
    create!: StatsCreateWithoutPokemonStatsInput;
}
