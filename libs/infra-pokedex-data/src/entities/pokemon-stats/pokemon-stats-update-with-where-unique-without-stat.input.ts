import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonStatsUpdateWithoutStatInput } from './pokemon-stats-update-without-stat.input';

@InputType()
export class PokemonStatsUpdateWithWhereUniqueWithoutStatInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsUpdateWithoutStatInput, {nullable:false})
    @Type(() => PokemonStatsUpdateWithoutStatInput)
    data!: PokemonStatsUpdateWithoutStatInput;
}
