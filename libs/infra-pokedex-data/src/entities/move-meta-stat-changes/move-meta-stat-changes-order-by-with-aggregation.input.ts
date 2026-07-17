import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesCountOrderByAggregateInput } from './move-meta-stat-changes-count-order-by-aggregate.input';
import { MoveMetaStatChangesAvgOrderByAggregateInput } from './move-meta-stat-changes-avg-order-by-aggregate.input';
import { MoveMetaStatChangesMaxOrderByAggregateInput } from './move-meta-stat-changes-max-order-by-aggregate.input';
import { MoveMetaStatChangesMinOrderByAggregateInput } from './move-meta-stat-changes-min-order-by-aggregate.input';
import { MoveMetaStatChangesSumOrderByAggregateInput } from './move-meta-stat-changes-sum-order-by-aggregate.input';

@InputType()
export class MoveMetaStatChangesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    change?: `${SortOrder}`;

    @Field(() => MoveMetaStatChangesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MoveMetaStatChangesCountOrderByAggregateInput>;

    @Field(() => MoveMetaStatChangesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MoveMetaStatChangesAvgOrderByAggregateInput>;

    @Field(() => MoveMetaStatChangesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MoveMetaStatChangesMaxOrderByAggregateInput>;

    @Field(() => MoveMetaStatChangesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MoveMetaStatChangesMinOrderByAggregateInput>;

    @Field(() => MoveMetaStatChangesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MoveMetaStatChangesSumOrderByAggregateInput>;
}
