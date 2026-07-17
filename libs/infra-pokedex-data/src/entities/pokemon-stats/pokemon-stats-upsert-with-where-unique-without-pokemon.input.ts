import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonStatsUpdateWithoutPokemonInput } from './pokemon-stats-update-without-pokemon.input';
import { PokemonStatsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';

@InputType()
export class PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonStatsUpdateWithoutPokemonInput)
    update!: Identity<PokemonStatsUpdateWithoutPokemonInput>;

    @Field(() => PokemonStatsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonStatsCreateWithoutPokemonInput)
    create!: Identity<PokemonStatsCreateWithoutPokemonInput>;
}
