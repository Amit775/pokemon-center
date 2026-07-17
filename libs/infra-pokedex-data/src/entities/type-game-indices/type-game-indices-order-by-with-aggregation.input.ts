import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCountOrderByAggregateInput } from './type-game-indices-count-order-by-aggregate.input';
import { TypeGameIndicesAvgOrderByAggregateInput } from './type-game-indices-avg-order-by-aggregate.input';
import { TypeGameIndicesMaxOrderByAggregateInput } from './type-game-indices-max-order-by-aggregate.input';
import { TypeGameIndicesMinOrderByAggregateInput } from './type-game-indices-min-order-by-aggregate.input';
import { TypeGameIndicesSumOrderByAggregateInput } from './type-game-indices-sum-order-by-aggregate.input';

@InputType()
export class TypeGameIndicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => TypeGameIndicesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<TypeGameIndicesCountOrderByAggregateInput>;

    @Field(() => TypeGameIndicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<TypeGameIndicesAvgOrderByAggregateInput>;

    @Field(() => TypeGameIndicesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<TypeGameIndicesMaxOrderByAggregateInput>;

    @Field(() => TypeGameIndicesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<TypeGameIndicesMinOrderByAggregateInput>;

    @Field(() => TypeGameIndicesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<TypeGameIndicesSumOrderByAggregateInput>;
}
