import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenerationsCountOrderByAggregateInput } from './generations-count-order-by-aggregate.input';
import { GenerationsAvgOrderByAggregateInput } from './generations-avg-order-by-aggregate.input';
import { GenerationsMaxOrderByAggregateInput } from './generations-max-order-by-aggregate.input';
import { GenerationsMinOrderByAggregateInput } from './generations-min-order-by-aggregate.input';
import { GenerationsSumOrderByAggregateInput } from './generations-sum-order-by-aggregate.input';

@InputType()
export class GenerationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    main_region_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => GenerationsCountOrderByAggregateInput, {nullable:true})
    _count?: GenerationsCountOrderByAggregateInput;

    @Field(() => GenerationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: GenerationsAvgOrderByAggregateInput;

    @Field(() => GenerationsMaxOrderByAggregateInput, {nullable:true})
    _max?: GenerationsMaxOrderByAggregateInput;

    @Field(() => GenerationsMinOrderByAggregateInput, {nullable:true})
    _min?: GenerationsMinOrderByAggregateInput;

    @Field(() => GenerationsSumOrderByAggregateInput, {nullable:true})
    _sum?: GenerationsSumOrderByAggregateInput;
}
