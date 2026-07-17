import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    _count?: Identity<GendersCountOrderByAggregateInput>;

    @Field(() => GendersAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<GendersAvgOrderByAggregateInput>;

    @Field(() => GendersMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<GendersMaxOrderByAggregateInput>;

    @Field(() => GendersMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<GendersMinOrderByAggregateInput>;

    @Field(() => GendersSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<GendersSumOrderByAggregateInput>;
}
