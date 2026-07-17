import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonStatsCreateInput } from './pokemon-stats-create.input';
import { PokemonStatsUpdateInput } from './pokemon-stats-update.input';

@ArgsType()
export class UpsertOnePokemonStatsArgs {

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => PokemonStatsCreateInput, {nullable:false})
    @Type(() => PokemonStatsCreateInput)
    create!: Identity<PokemonStatsCreateInput>;

    @Field(() => PokemonStatsUpdateInput, {nullable:false})
    @Type(() => PokemonStatsUpdateInput)
    update!: Identity<PokemonStatsUpdateInput>;
}
