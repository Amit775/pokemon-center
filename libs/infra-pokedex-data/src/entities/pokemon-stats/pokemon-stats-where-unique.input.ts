import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsPokemon_idStat_idCompoundUniqueInput } from './pokemon-stats-pokemon-id-stat-id-compound-unique.input';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { StatsScalarRelationFilter } from '../stats/stats-scalar-relation-filter.input';

@InputType()
export class PokemonStatsWhereUniqueInput {

    @Field(() => PokemonStatsPokemon_idStat_idCompoundUniqueInput, {nullable:true})
    pokemon_id_stat_id?: Identity<PokemonStatsPokemon_idStat_idCompoundUniqueInput>;

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    AND?: Array<PokemonStatsWhereInput>;

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    OR?: Array<PokemonStatsWhereInput>;

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    NOT?: Array<PokemonStatsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effort?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    stat?: Identity<StatsScalarRelationFilter>;
}
