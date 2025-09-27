import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: ContestTypesCountOrderByAggregateInput;

    @Field(() => ContestTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContestTypesAvgOrderByAggregateInput;

    @Field(() => ContestTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: ContestTypesMaxOrderByAggregateInput;

    @Field(() => ContestTypesMinOrderByAggregateInput, {nullable:true})
    _min?: ContestTypesMinOrderByAggregateInput;

    @Field(() => ContestTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: ContestTypesSumOrderByAggregateInput;
}
