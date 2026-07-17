import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    level?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    order?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    mastery?: Identity<SortOrderInput>;

    @Field(() => PokemonMovesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonMovesCountOrderByAggregateInput>;

    @Field(() => PokemonMovesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonMovesAvgOrderByAggregateInput>;

    @Field(() => PokemonMovesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonMovesMaxOrderByAggregateInput>;

    @Field(() => PokemonMovesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonMovesMinOrderByAggregateInput>;

    @Field(() => PokemonMovesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonMovesSumOrderByAggregateInput>;
}
