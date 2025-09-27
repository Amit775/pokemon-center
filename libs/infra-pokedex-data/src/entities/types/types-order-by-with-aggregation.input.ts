import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TypesCountOrderByAggregateInput } from './types-count-order-by-aggregate.input';
import { TypesAvgOrderByAggregateInput } from './types-avg-order-by-aggregate.input';
import { TypesMaxOrderByAggregateInput } from './types-max-order-by-aggregate.input';
import { TypesMinOrderByAggregateInput } from './types-min-order-by-aggregate.input';
import { TypesSumOrderByAggregateInput } from './types-sum-order-by-aggregate.input';

@InputType()
export class TypesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    damage_class_id?: SortOrderInput;

    @Field(() => TypesCountOrderByAggregateInput, {nullable:true})
    _count?: TypesCountOrderByAggregateInput;

    @Field(() => TypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: TypesAvgOrderByAggregateInput;

    @Field(() => TypesMaxOrderByAggregateInput, {nullable:true})
    _max?: TypesMaxOrderByAggregateInput;

    @Field(() => TypesMinOrderByAggregateInput, {nullable:true})
    _min?: TypesMinOrderByAggregateInput;

    @Field(() => TypesSumOrderByAggregateInput, {nullable:true})
    _sum?: TypesSumOrderByAggregateInput;
}
