import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsUpdateInput } from './pokemon-stats-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';

@ArgsType()
export class UpdateOnePokemonStatsArgs {

    @Field(() => PokemonStatsUpdateInput, {nullable:false})
    @Type(() => PokemonStatsUpdateInput)
    data!: Identity<PokemonStatsUpdateInput>;

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonStatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;
}
