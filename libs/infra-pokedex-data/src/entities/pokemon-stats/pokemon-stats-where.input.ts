import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { StatsScalarRelationFilter } from '../stats/stats-scalar-relation-filter.input';

@InputType()
export class PokemonStatsWhereInput {

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    AND?: Array<PokemonStatsWhereInput>;

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    OR?: Array<PokemonStatsWhereInput>;

    @Field(() => [PokemonStatsWhereInput], {nullable:true})
    NOT?: Array<PokemonStatsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effort?: IntFilter;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: PokemonScalarRelationFilter;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    stat?: StatsScalarRelationFilter;
}
