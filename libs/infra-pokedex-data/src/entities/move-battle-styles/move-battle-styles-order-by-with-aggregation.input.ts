import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveBattleStylesCountOrderByAggregateInput } from './move-battle-styles-count-order-by-aggregate.input';
import { MoveBattleStylesAvgOrderByAggregateInput } from './move-battle-styles-avg-order-by-aggregate.input';
import { MoveBattleStylesMaxOrderByAggregateInput } from './move-battle-styles-max-order-by-aggregate.input';
import { MoveBattleStylesMinOrderByAggregateInput } from './move-battle-styles-min-order-by-aggregate.input';
import { MoveBattleStylesSumOrderByAggregateInput } from './move-battle-styles-sum-order-by-aggregate.input';

@InputType()
export class MoveBattleStylesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveBattleStylesCountOrderByAggregateInput, {nullable:true})
    _count?: MoveBattleStylesCountOrderByAggregateInput;

    @Field(() => MoveBattleStylesAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveBattleStylesAvgOrderByAggregateInput;

    @Field(() => MoveBattleStylesMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveBattleStylesMaxOrderByAggregateInput;

    @Field(() => MoveBattleStylesMinOrderByAggregateInput, {nullable:true})
    _min?: MoveBattleStylesMinOrderByAggregateInput;

    @Field(() => MoveBattleStylesSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveBattleStylesSumOrderByAggregateInput;
}
