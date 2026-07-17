import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { StatsCountOrderByAggregateInput } from './stats-count-order-by-aggregate.input';
import { StatsAvgOrderByAggregateInput } from './stats-avg-order-by-aggregate.input';
import { StatsMaxOrderByAggregateInput } from './stats-max-order-by-aggregate.input';
import { StatsMinOrderByAggregateInput } from './stats-min-order-by-aggregate.input';
import { StatsSumOrderByAggregateInput } from './stats-sum-order-by-aggregate.input';

@InputType()
export class StatsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    damage_class_id?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    game_index?: Identity<SortOrderInput>;

    @Field(() => StatsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<StatsCountOrderByAggregateInput>;

    @Field(() => StatsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<StatsAvgOrderByAggregateInput>;

    @Field(() => StatsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<StatsMaxOrderByAggregateInput>;

    @Field(() => StatsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<StatsMinOrderByAggregateInput>;

    @Field(() => StatsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<StatsSumOrderByAggregateInput>;
}
