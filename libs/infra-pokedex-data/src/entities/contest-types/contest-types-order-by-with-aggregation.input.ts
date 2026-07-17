import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ContestTypesCountOrderByAggregateInput } from './contest-types-count-order-by-aggregate.input';
import { ContestTypesAvgOrderByAggregateInput } from './contest-types-avg-order-by-aggregate.input';
import { ContestTypesMaxOrderByAggregateInput } from './contest-types-max-order-by-aggregate.input';
import { ContestTypesMinOrderByAggregateInput } from './contest-types-min-order-by-aggregate.input';
import { ContestTypesSumOrderByAggregateInput } from './contest-types-sum-order-by-aggregate.input';

@InputType()
export class ContestTypesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ContestTypesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ContestTypesCountOrderByAggregateInput>;

    @Field(() => ContestTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ContestTypesAvgOrderByAggregateInput>;

    @Field(() => ContestTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ContestTypesMaxOrderByAggregateInput>;

    @Field(() => ContestTypesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ContestTypesMinOrderByAggregateInput>;

    @Field(() => ContestTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ContestTypesSumOrderByAggregateInput>;
}
