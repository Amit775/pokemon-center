import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonMoveMethodsCountOrderByAggregateInput } from './pokemon-move-methods-count-order-by-aggregate.input';
import { PokemonMoveMethodsAvgOrderByAggregateInput } from './pokemon-move-methods-avg-order-by-aggregate.input';
import { PokemonMoveMethodsMaxOrderByAggregateInput } from './pokemon-move-methods-max-order-by-aggregate.input';
import { PokemonMoveMethodsMinOrderByAggregateInput } from './pokemon-move-methods-min-order-by-aggregate.input';
import { PokemonMoveMethodsSumOrderByAggregateInput } from './pokemon-move-methods-sum-order-by-aggregate.input';

@InputType()
export class PokemonMoveMethodsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonMoveMethodsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonMoveMethodsCountOrderByAggregateInput;

    @Field(() => PokemonMoveMethodsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonMoveMethodsAvgOrderByAggregateInput;

    @Field(() => PokemonMoveMethodsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonMoveMethodsMaxOrderByAggregateInput;

    @Field(() => PokemonMoveMethodsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonMoveMethodsMinOrderByAggregateInput;

    @Field(() => PokemonMoveMethodsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonMoveMethodsSumOrderByAggregateInput;
}
