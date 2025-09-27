import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: BerryFlavorsCountOrderByAggregateInput;

    @Field(() => BerryFlavorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: BerryFlavorsAvgOrderByAggregateInput;

    @Field(() => BerryFlavorsMaxOrderByAggregateInput, {nullable:true})
    _max?: BerryFlavorsMaxOrderByAggregateInput;

    @Field(() => BerryFlavorsMinOrderByAggregateInput, {nullable:true})
    _min?: BerryFlavorsMinOrderByAggregateInput;

    @Field(() => BerryFlavorsSumOrderByAggregateInput, {nullable:true})
    _sum?: BerryFlavorsSumOrderByAggregateInput;
}
