import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StatsScalarRelationFilter } from '../stats/stats-scalar-relation-filter.input';
import { NatureBattleStylePreferencesListRelationFilter } from '../nature-battle-style-preferences/nature-battle-style-preferences-list-relation-filter.input';

@InputType()
export class NaturesWhereInput {

    @Field(() => [NaturesWhereInput], {nullable:true})
    AND?: Array<NaturesWhereInput>;

    @Field(() => [NaturesWhereInput], {nullable:true})
    OR?: Array<NaturesWhereInput>;

    @Field(() => [NaturesWhereInput], {nullable:true})
    NOT?: Array<NaturesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    decreased_stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    increased_stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    hates_flavor_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    likes_flavor_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    decreasedStat?: Identity<StatsScalarRelationFilter>;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    increasedStat?: Identity<StatsScalarRelationFilter>;

    @Field(() => NatureBattleStylePreferencesListRelationFilter, {nullable:true})
    battleStylePreferences?: Identity<NatureBattleStylePreferencesListRelationFilter>;
}
