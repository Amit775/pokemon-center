import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MoveMetaCountOrderByAggregateInput } from './move-meta-count-order-by-aggregate.input';
import { MoveMetaAvgOrderByAggregateInput } from './move-meta-avg-order-by-aggregate.input';
import { MoveMetaMaxOrderByAggregateInput } from './move-meta-max-order-by-aggregate.input';
import { MoveMetaMinOrderByAggregateInput } from './move-meta-min-order-by-aggregate.input';
import { MoveMetaSumOrderByAggregateInput } from './move-meta-sum-order-by-aggregate.input';

@InputType()
export class MoveMetaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    meta_ailment_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    min_hits?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    max_hits?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    min_turns?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    max_turns?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    drain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    healing?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    crit_rate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ailment_chance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flinch_chance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_chance?: `${SortOrder}`;

    @Field(() => MoveMetaCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MoveMetaCountOrderByAggregateInput>;

    @Field(() => MoveMetaAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MoveMetaAvgOrderByAggregateInput>;

    @Field(() => MoveMetaMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MoveMetaMaxOrderByAggregateInput>;

    @Field(() => MoveMetaMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MoveMetaMinOrderByAggregateInput>;

    @Field(() => MoveMetaSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MoveMetaSumOrderByAggregateInput>;
}
