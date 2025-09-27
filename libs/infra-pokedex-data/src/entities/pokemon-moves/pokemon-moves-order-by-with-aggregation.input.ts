import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonMovesCountOrderByAggregateInput } from './pokemon-moves-count-order-by-aggregate.input';
import { PokemonMovesAvgOrderByAggregateInput } from './pokemon-moves-avg-order-by-aggregate.input';
import { PokemonMovesMaxOrderByAggregateInput } from './pokemon-moves-max-order-by-aggregate.input';
import { PokemonMovesMinOrderByAggregateInput } from './pokemon-moves-min-order-by-aggregate.input';
import { PokemonMovesSumOrderByAggregateInput } from './pokemon-moves-sum-order-by-aggregate.input';

@InputType()
export class PokemonMovesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    order?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mastery?: SortOrderInput;

    @Field(() => PokemonMovesCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonMovesCountOrderByAggregateInput;

    @Field(() => PokemonMovesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonMovesAvgOrderByAggregateInput;

    @Field(() => PokemonMovesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonMovesMaxOrderByAggregateInput;

    @Field(() => PokemonMovesMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonMovesMinOrderByAggregateInput;

    @Field(() => PokemonMovesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonMovesSumOrderByAggregateInput;
}
