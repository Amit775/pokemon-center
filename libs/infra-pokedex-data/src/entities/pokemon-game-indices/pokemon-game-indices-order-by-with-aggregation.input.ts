import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesCountOrderByAggregateInput } from './pokemon-game-indices-count-order-by-aggregate.input';
import { PokemonGameIndicesAvgOrderByAggregateInput } from './pokemon-game-indices-avg-order-by-aggregate.input';
import { PokemonGameIndicesMaxOrderByAggregateInput } from './pokemon-game-indices-max-order-by-aggregate.input';
import { PokemonGameIndicesMinOrderByAggregateInput } from './pokemon-game-indices-min-order-by-aggregate.input';
import { PokemonGameIndicesSumOrderByAggregateInput } from './pokemon-game-indices-sum-order-by-aggregate.input';

@InputType()
export class PokemonGameIndicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => PokemonGameIndicesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonGameIndicesCountOrderByAggregateInput>;

    @Field(() => PokemonGameIndicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonGameIndicesAvgOrderByAggregateInput>;

    @Field(() => PokemonGameIndicesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonGameIndicesMaxOrderByAggregateInput>;

    @Field(() => PokemonGameIndicesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonGameIndicesMinOrderByAggregateInput>;

    @Field(() => PokemonGameIndicesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonGameIndicesSumOrderByAggregateInput>;
}
