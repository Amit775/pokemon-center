import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCountOrderByAggregateInput } from './nature-battle-style-preferences-count-order-by-aggregate.input';
import { NatureBattleStylePreferencesAvgOrderByAggregateInput } from './nature-battle-style-preferences-avg-order-by-aggregate.input';
import { NatureBattleStylePreferencesMaxOrderByAggregateInput } from './nature-battle-style-preferences-max-order-by-aggregate.input';
import { NatureBattleStylePreferencesMinOrderByAggregateInput } from './nature-battle-style-preferences-min-order-by-aggregate.input';
import { NatureBattleStylePreferencesSumOrderByAggregateInput } from './nature-battle-style-preferences-sum-order-by-aggregate.input';

@InputType()
export class NatureBattleStylePreferencesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: `${SortOrder}`;

    @Field(() => NatureBattleStylePreferencesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<NatureBattleStylePreferencesCountOrderByAggregateInput>;

    @Field(() => NatureBattleStylePreferencesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<NatureBattleStylePreferencesAvgOrderByAggregateInput>;

    @Field(() => NatureBattleStylePreferencesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<NatureBattleStylePreferencesMaxOrderByAggregateInput>;

    @Field(() => NatureBattleStylePreferencesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<NatureBattleStylePreferencesMinOrderByAggregateInput>;

    @Field(() => NatureBattleStylePreferencesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<NatureBattleStylePreferencesSumOrderByAggregateInput>;
}
