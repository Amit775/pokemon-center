import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    nature_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_battle_style_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    low_hp_preference?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    high_hp_preference?: IntWithAggregatesFilter;
}
