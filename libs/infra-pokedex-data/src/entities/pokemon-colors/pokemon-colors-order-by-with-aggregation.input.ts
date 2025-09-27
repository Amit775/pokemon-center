import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonColorsCountOrderByAggregateInput } from './pokemon-colors-count-order-by-aggregate.input';
import { PokemonColorsAvgOrderByAggregateInput } from './pokemon-colors-avg-order-by-aggregate.input';
import { PokemonColorsMaxOrderByAggregateInput } from './pokemon-colors-max-order-by-aggregate.input';
import { PokemonColorsMinOrderByAggregateInput } from './pokemon-colors-min-order-by-aggregate.input';
import { PokemonColorsSumOrderByAggregateInput } from './pokemon-colors-sum-order-by-aggregate.input';

@InputType()
export class PokemonColorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonColorsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonColorsCountOrderByAggregateInput;

    @Field(() => PokemonColorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonColorsAvgOrderByAggregateInput;

    @Field(() => PokemonColorsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonColorsMaxOrderByAggregateInput;

    @Field(() => PokemonColorsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonColorsMinOrderByAggregateInput;

    @Field(() => PokemonColorsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonColorsSumOrderByAggregateInput;
}
