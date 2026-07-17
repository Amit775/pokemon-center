import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateWithoutStatInput } from './pokemon-stats-create-without-stat.input';

@InputType()
export class PokemonStatsCreateOrConnectWithoutStatInput {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsCreateWithoutStatInput, {nullable:false})
    @Type(() => PokemonStatsCreateWithoutStatInput)
    create!: PokemonStatsCreateWithoutStatInput;
}
