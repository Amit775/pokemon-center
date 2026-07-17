import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutPokemonStatsInput } from './stats-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutPokemonStatsInput } from './stats-create-or-connect-without-pokemon-stats.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutPokemonStatsInput {

    @Field(() => StatsCreateWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateWithoutPokemonStatsInput)
    create?: StatsCreateWithoutPokemonStatsInput;

    @Field(() => StatsCreateOrConnectWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutPokemonStatsInput)
    connectOrCreate?: StatsCreateOrConnectWithoutPokemonStatsInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
