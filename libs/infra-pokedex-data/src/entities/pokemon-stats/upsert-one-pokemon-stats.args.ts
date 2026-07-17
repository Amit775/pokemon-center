import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateInput } from './pokemon-stats-create.input';
import { PokemonStatsUpdateInput } from './pokemon-stats-update.input';

@ArgsType()
export class UpsertOnePokemonStatsArgs {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsCreateInput, {nullable:false})
    @Type(() => PokemonStatsCreateInput)
    create!: PokemonStatsCreateInput;

    @Field(() => PokemonStatsUpdateInput, {nullable:false})
    @Type(() => PokemonStatsUpdateInput)
    update!: PokemonStatsUpdateInput;
}
