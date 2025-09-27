import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveMetaCategoriesCountOrderByAggregateInput } from './move-meta-categories-count-order-by-aggregate.input';
import { MoveMetaCategoriesAvgOrderByAggregateInput } from './move-meta-categories-avg-order-by-aggregate.input';
import { MoveMetaCategoriesMaxOrderByAggregateInput } from './move-meta-categories-max-order-by-aggregate.input';
import { MoveMetaCategoriesMinOrderByAggregateInput } from './move-meta-categories-min-order-by-aggregate.input';
import { MoveMetaCategoriesSumOrderByAggregateInput } from './move-meta-categories-sum-order-by-aggregate.input';

@InputType()
export class MoveMetaCategoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveMetaCategoriesCountOrderByAggregateInput, {nullable:true})
    _count?: MoveMetaCategoriesCountOrderByAggregateInput;

    @Field(() => MoveMetaCategoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveMetaCategoriesAvgOrderByAggregateInput;

    @Field(() => MoveMetaCategoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveMetaCategoriesMaxOrderByAggregateInput;

    @Field(() => MoveMetaCategoriesMinOrderByAggregateInput, {nullable:true})
    _min?: MoveMetaCategoriesMinOrderByAggregateInput;

    @Field(() => MoveMetaCategoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveMetaCategoriesSumOrderByAggregateInput;
}
