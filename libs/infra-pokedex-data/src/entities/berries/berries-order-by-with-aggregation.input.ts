import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BerriesCountOrderByAggregateInput } from './berries-count-order-by-aggregate.input';
import { BerriesAvgOrderByAggregateInput } from './berries-avg-order-by-aggregate.input';
import { BerriesMaxOrderByAggregateInput } from './berries-max-order-by-aggregate.input';
import { BerriesMinOrderByAggregateInput } from './berries-min-order-by-aggregate.input';
import { BerriesSumOrderByAggregateInput } from './berries-sum-order-by-aggregate.input';

@InputType()
export class BerriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firmness_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    natural_gift_power?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    natural_gift_type_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_harvest?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    growth_time?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soil_dryness?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    smoothness?: `${SortOrder}`;

    @Field(() => BerriesCountOrderByAggregateInput, {nullable:true})
    _count?: BerriesCountOrderByAggregateInput;

    @Field(() => BerriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: BerriesAvgOrderByAggregateInput;

    @Field(() => BerriesMaxOrderByAggregateInput, {nullable:true})
    _max?: BerriesMaxOrderByAggregateInput;

    @Field(() => BerriesMinOrderByAggregateInput, {nullable:true})
    _min?: BerriesMinOrderByAggregateInput;

    @Field(() => BerriesSumOrderByAggregateInput, {nullable:true})
    _sum?: BerriesSumOrderByAggregateInput;
}
