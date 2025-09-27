import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GrowthRatesCountOrderByAggregateInput } from './growth-rates-count-order-by-aggregate.input';
import { GrowthRatesAvgOrderByAggregateInput } from './growth-rates-avg-order-by-aggregate.input';
import { GrowthRatesMaxOrderByAggregateInput } from './growth-rates-max-order-by-aggregate.input';
import { GrowthRatesMinOrderByAggregateInput } from './growth-rates-min-order-by-aggregate.input';
import { GrowthRatesSumOrderByAggregateInput } from './growth-rates-sum-order-by-aggregate.input';

@InputType()
export class GrowthRatesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    formula?: `${SortOrder}`;

    @Field(() => GrowthRatesCountOrderByAggregateInput, {nullable:true})
    _count?: GrowthRatesCountOrderByAggregateInput;

    @Field(() => GrowthRatesAvgOrderByAggregateInput, {nullable:true})
    _avg?: GrowthRatesAvgOrderByAggregateInput;

    @Field(() => GrowthRatesMaxOrderByAggregateInput, {nullable:true})
    _max?: GrowthRatesMaxOrderByAggregateInput;

    @Field(() => GrowthRatesMinOrderByAggregateInput, {nullable:true})
    _min?: GrowthRatesMinOrderByAggregateInput;

    @Field(() => GrowthRatesSumOrderByAggregateInput, {nullable:true})
    _sum?: GrowthRatesSumOrderByAggregateInput;
}
