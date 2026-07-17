import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonStatsUpdateWithoutPokemonInput } from './pokemon-stats-update-without-pokemon.input';

@InputType()
export class PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonStatsUpdateWithoutPokemonInput)
    data!: PokemonStatsUpdateWithoutPokemonInput;
}
