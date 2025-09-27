import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonStatsListRelationFilter } from '../pokemon-stats/pokemon-stats-list-relation-filter.input';
import { MoveMetaStatChangesListRelationFilter } from '../move-meta-stat-changes/move-meta-stat-changes-list-relation-filter.input';
import { CharacteristicsListRelationFilter } from '../characteristics/characteristics-list-relation-filter.input';
import { NaturesListRelationFilter } from '../natures/natures-list-relation-filter.input';

@InputType()
export class StatsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [StatsWhereInput], {nullable:true})
    AND?: Array<StatsWhereInput>;

    @Field(() => [StatsWhereInput], {nullable:true})
    OR?: Array<StatsWhereInput>;

    @Field(() => [StatsWhereInput], {nullable:true})
    NOT?: Array<StatsWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    game_index?: IntNullableFilter;

    @Field(() => PokemonStatsListRelationFilter, {nullable:true})
    pokemonStats?: PokemonStatsListRelationFilter;

    @Field(() => MoveMetaStatChangesListRelationFilter, {nullable:true})
    moveMetaStatChanges?: MoveMetaStatChangesListRelationFilter;

    @Field(() => CharacteristicsListRelationFilter, {nullable:true})
    characteristics?: CharacteristicsListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    naturesDecreased?: NaturesListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    naturesIncreased?: NaturesListRelationFilter;
}
