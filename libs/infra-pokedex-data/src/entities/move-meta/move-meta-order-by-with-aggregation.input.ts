import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    meta_ailment_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    min_hits?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_hits?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    min_turns?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_turns?: SortOrderInput;

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
    _count?: MoveMetaCountOrderByAggregateInput;

    @Field(() => MoveMetaAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveMetaAvgOrderByAggregateInput;

    @Field(() => MoveMetaMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveMetaMaxOrderByAggregateInput;

    @Field(() => MoveMetaMinOrderByAggregateInput, {nullable:true})
    _min?: MoveMetaMinOrderByAggregateInput;

    @Field(() => MoveMetaSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveMetaSumOrderByAggregateInput;
}
