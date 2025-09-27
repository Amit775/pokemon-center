import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GendersCountOrderByAggregateInput } from './genders-count-order-by-aggregate.input';
import { GendersAvgOrderByAggregateInput } from './genders-avg-order-by-aggregate.input';
import { GendersMaxOrderByAggregateInput } from './genders-max-order-by-aggregate.input';
import { GendersMinOrderByAggregateInput } from './genders-min-order-by-aggregate.input';
import { GendersSumOrderByAggregateInput } from './genders-sum-order-by-aggregate.input';

@InputType()
export class GendersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => GendersCountOrderByAggregateInput, {nullable:true})
    _count?: GendersCountOrderByAggregateInput;

    @Field(() => GendersAvgOrderByAggregateInput, {nullable:true})
    _avg?: GendersAvgOrderByAggregateInput;

    @Field(() => GendersMaxOrderByAggregateInput, {nullable:true})
    _max?: GendersMaxOrderByAggregateInput;

    @Field(() => GendersMinOrderByAggregateInput, {nullable:true})
    _min?: GendersMinOrderByAggregateInput;

    @Field(() => GendersSumOrderByAggregateInput, {nullable:true})
    _sum?: GendersSumOrderByAggregateInput;
}
