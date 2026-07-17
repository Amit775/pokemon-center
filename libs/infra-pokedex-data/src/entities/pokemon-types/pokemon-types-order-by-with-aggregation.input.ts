import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonTypesCountOrderByAggregateInput } from './pokemon-types-count-order-by-aggregate.input';
import { PokemonTypesAvgOrderByAggregateInput } from './pokemon-types-avg-order-by-aggregate.input';
import { PokemonTypesMaxOrderByAggregateInput } from './pokemon-types-max-order-by-aggregate.input';
import { PokemonTypesMinOrderByAggregateInput } from './pokemon-types-min-order-by-aggregate.input';
import { PokemonTypesSumOrderByAggregateInput } from './pokemon-types-sum-order-by-aggregate.input';

@InputType()
export class PokemonTypesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonTypesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonTypesCountOrderByAggregateInput>;

    @Field(() => PokemonTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonTypesAvgOrderByAggregateInput>;

    @Field(() => PokemonTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonTypesMaxOrderByAggregateInput>;

    @Field(() => PokemonTypesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonTypesMinOrderByAggregateInput>;

    @Field(() => PokemonTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonTypesSumOrderByAggregateInput>;
}
