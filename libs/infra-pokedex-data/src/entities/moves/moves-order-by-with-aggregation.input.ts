import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MovesCountOrderByAggregateInput } from './moves-count-order-by-aggregate.input';
import { MovesAvgOrderByAggregateInput } from './moves-avg-order-by-aggregate.input';
import { MovesMaxOrderByAggregateInput } from './moves-max-order-by-aggregate.input';
import { MovesMinOrderByAggregateInput } from './moves-min-order-by-aggregate.input';
import { MovesSumOrderByAggregateInput } from './moves-sum-order-by-aggregate.input';

@InputType()
export class MovesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    power?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    pp?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    accuracy?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    effect_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    effect_chance?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    contest_type_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    contest_effect_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    super_contest_effect_id?: Identity<SortOrderInput>;

    @Field(() => MovesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MovesCountOrderByAggregateInput>;

    @Field(() => MovesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MovesAvgOrderByAggregateInput>;

    @Field(() => MovesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MovesMaxOrderByAggregateInput>;

    @Field(() => MovesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MovesMinOrderByAggregateInput>;

    @Field(() => MovesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MovesSumOrderByAggregateInput>;
}
