import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutPokemonStatsInput } from './stats-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutPokemonStatsInput } from './stats-create-or-connect-without-pokemon-stats.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutPokemonStatsInput {

    @Field(() => StatsCreateWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateWithoutPokemonStatsInput)
    create?: Identity<StatsCreateWithoutPokemonStatsInput>;

    @Field(() => StatsCreateOrConnectWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutPokemonStatsInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutPokemonStatsInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
