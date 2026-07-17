import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class NatureBattleStylePreferencesScalarWhereWithAggregatesInput {

    @Field(() => [NatureBattleStylePreferencesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NatureBattleStylePreferencesScalarWhereWithAggregatesInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NatureBattleStylePreferencesScalarWhereWithAggregatesInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NatureBattleStylePreferencesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nature_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_battle_style_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    low_hp_preference?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    high_hp_preference?: Identity<IntWithAggregatesFilter>;
}
