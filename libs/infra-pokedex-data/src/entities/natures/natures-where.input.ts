import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    decreased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    increased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hates_flavor_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    likes_flavor_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    decreasedStat?: StatsScalarRelationFilter;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    increasedStat?: StatsScalarRelationFilter;

    @Field(() => NatureBattleStylePreferencesListRelationFilter, {nullable:true})
    battleStylePreferences?: NatureBattleStylePreferencesListRelationFilter;
}
