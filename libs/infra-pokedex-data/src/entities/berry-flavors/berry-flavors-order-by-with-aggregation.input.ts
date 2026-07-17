import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { BerryFlavorsCountOrderByAggregateInput } from './berry-flavors-count-order-by-aggregate.input';
import { BerryFlavorsAvgOrderByAggregateInput } from './berry-flavors-avg-order-by-aggregate.input';
import { BerryFlavorsMaxOrderByAggregateInput } from './berry-flavors-max-order-by-aggregate.input';
import { BerryFlavorsMinOrderByAggregateInput } from './berry-flavors-min-order-by-aggregate.input';
import { BerryFlavorsSumOrderByAggregateInput } from './berry-flavors-sum-order-by-aggregate.input';

@InputType()
export class BerryFlavorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flavor?: `${SortOrder}`;

    @Field(() => BerryFlavorsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<BerryFlavorsCountOrderByAggregateInput>;

    @Field(() => BerryFlavorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<BerryFlavorsAvgOrderByAggregateInput>;

    @Field(() => BerryFlavorsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<BerryFlavorsMaxOrderByAggregateInput>;

    @Field(() => BerryFlavorsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<BerryFlavorsMinOrderByAggregateInput>;

    @Field(() => BerryFlavorsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<BerryFlavorsSumOrderByAggregateInput>;
}
