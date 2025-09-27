import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegionsCountOrderByAggregateInput } from './regions-count-order-by-aggregate.input';
import { RegionsAvgOrderByAggregateInput } from './regions-avg-order-by-aggregate.input';
import { RegionsMaxOrderByAggregateInput } from './regions-max-order-by-aggregate.input';
import { RegionsMinOrderByAggregateInput } from './regions-min-order-by-aggregate.input';
import { RegionsSumOrderByAggregateInput } from './regions-sum-order-by-aggregate.input';

@InputType()
export class RegionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => RegionsCountOrderByAggregateInput, {nullable:true})
    _count?: RegionsCountOrderByAggregateInput;

    @Field(() => RegionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: RegionsAvgOrderByAggregateInput;

    @Field(() => RegionsMaxOrderByAggregateInput, {nullable:true})
    _max?: RegionsMaxOrderByAggregateInput;

    @Field(() => RegionsMinOrderByAggregateInput, {nullable:true})
    _min?: RegionsMinOrderByAggregateInput;

    @Field(() => RegionsSumOrderByAggregateInput, {nullable:true})
    _sum?: RegionsSumOrderByAggregateInput;
}
