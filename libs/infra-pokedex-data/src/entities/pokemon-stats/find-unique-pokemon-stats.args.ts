import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePokemonStatsArgs {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;
}
