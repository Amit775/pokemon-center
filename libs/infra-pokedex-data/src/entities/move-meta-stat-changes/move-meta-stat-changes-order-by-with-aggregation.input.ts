import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: MoveMetaStatChangesCountOrderByAggregateInput;

    @Field(() => MoveMetaStatChangesAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveMetaStatChangesAvgOrderByAggregateInput;

    @Field(() => MoveMetaStatChangesMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveMetaStatChangesMaxOrderByAggregateInput;

    @Field(() => MoveMetaStatChangesMinOrderByAggregateInput, {nullable:true})
    _min?: MoveMetaStatChangesMinOrderByAggregateInput;

    @Field(() => MoveMetaStatChangesSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveMetaStatChangesSumOrderByAggregateInput;
}
