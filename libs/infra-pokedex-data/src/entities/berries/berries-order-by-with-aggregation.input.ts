import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    natural_gift_power?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    natural_gift_type_id?: Identity<SortOrderInput>;

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
    _count?: Identity<BerriesCountOrderByAggregateInput>;

    @Field(() => BerriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<BerriesAvgOrderByAggregateInput>;

    @Field(() => BerriesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<BerriesMaxOrderByAggregateInput>;

    @Field(() => BerriesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<BerriesMinOrderByAggregateInput>;

    @Field(() => BerriesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<BerriesSumOrderByAggregateInput>;
}
