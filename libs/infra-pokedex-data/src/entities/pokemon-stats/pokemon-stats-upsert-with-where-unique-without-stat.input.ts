import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonStatsUpdateWithoutStatInput } from './pokemon-stats-update-without-stat.input';
import { PokemonStatsCreateWithoutStatInput } from './pokemon-stats-create-without-stat.input';

@InputType()
export class PokemonStatsUpsertWithWhereUniqueWithoutStatInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsUpdateWithoutStatInput, {nullable:false})
    @Type(() => PokemonStatsUpdateWithoutStatInput)
    update!: Identity<PokemonStatsUpdateWithoutStatInput>;

    @Field(() => PokemonStatsCreateWithoutStatInput, {nullable:false})
    @Type(() => PokemonStatsCreateWithoutStatInput)
    create!: Identity<PokemonStatsCreateWithoutStatInput>;
}
