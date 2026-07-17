import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';

@InputType()
export class PokemonStatsCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonStatsCreateWithoutPokemonInput)
    create!: PokemonStatsCreateWithoutPokemonInput;
}
