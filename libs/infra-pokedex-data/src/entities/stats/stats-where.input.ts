import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonStatsListRelationFilter } from '../pokemon-stats/pokemon-stats-list-relation-filter.input';
import { MoveMetaStatChangesListRelationFilter } from '../move-meta-stat-changes/move-meta-stat-changes-list-relation-filter.input';
import { CharacteristicsListRelationFilter } from '../characteristics/characteristics-list-relation-filter.input';
import { NaturesListRelationFilter } from '../natures/natures-list-relation-filter.input';

@InputType()
export class StatsWhereInput {

    @Field(() => [StatsWhereInput], {nullable:true})
    AND?: Array<StatsWhereInput>;

    @Field(() => [StatsWhereInput], {nullable:true})
    OR?: Array<StatsWhereInput>;

    @Field(() => [StatsWhereInput], {nullable:true})
    NOT?: Array<StatsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => PokemonStatsListRelationFilter, {nullable:true})
    pokemonStats?: Identity<PokemonStatsListRelationFilter>;

    @Field(() => MoveMetaStatChangesListRelationFilter, {nullable:true})
    moveMetaStatChanges?: Identity<MoveMetaStatChangesListRelationFilter>;

    @Field(() => CharacteristicsListRelationFilter, {nullable:true})
    characteristics?: Identity<CharacteristicsListRelationFilter>;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    naturesDecreased?: Identity<NaturesListRelationFilter>;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    naturesIncreased?: Identity<NaturesListRelationFilter>;
}
