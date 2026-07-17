import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutPokemonStatsInput } from './stats-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutPokemonStatsInput } from './stats-create-or-connect-without-pokemon-stats.input';
import { StatsUpsertWithoutPokemonStatsInput } from './stats-upsert-without-pokemon-stats.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutPokemonStatsInput } from './stats-update-to-one-with-where-without-pokemon-stats.input';

@InputType()
export class StatsUpdateOneRequiredWithoutPokemonStatsNestedInput {

    @Field(() => StatsCreateWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateWithoutPokemonStatsInput)
    create?: StatsCreateWithoutPokemonStatsInput;

    @Field(() => StatsCreateOrConnectWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutPokemonStatsInput)
    connectOrCreate?: StatsCreateOrConnectWithoutPokemonStatsInput;

    @Field(() => StatsUpsertWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsUpsertWithoutPokemonStatsInput)
    upsert?: StatsUpsertWithoutPokemonStatsInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutPokemonStatsInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutPokemonStatsInput)
    update?: StatsUpdateToOneWithWhereWithoutPokemonStatsInput;
}
