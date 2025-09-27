import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonDexNumbersCountOrderByAggregateInput } from './pokemon-dex-numbers-count-order-by-aggregate.input';
import { PokemonDexNumbersAvgOrderByAggregateInput } from './pokemon-dex-numbers-avg-order-by-aggregate.input';
import { PokemonDexNumbersMaxOrderByAggregateInput } from './pokemon-dex-numbers-max-order-by-aggregate.input';
import { PokemonDexNumbersMinOrderByAggregateInput } from './pokemon-dex-numbers-min-order-by-aggregate.input';
import { PokemonDexNumbersSumOrderByAggregateInput } from './pokemon-dex-numbers-sum-order-by-aggregate.input';

@InputType()
export class PokemonDexNumbersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_number?: `${SortOrder}`;

    @Field(() => PokemonDexNumbersCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonDexNumbersCountOrderByAggregateInput;

    @Field(() => PokemonDexNumbersAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonDexNumbersAvgOrderByAggregateInput;

    @Field(() => PokemonDexNumbersMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonDexNumbersMaxOrderByAggregateInput;

    @Field(() => PokemonDexNumbersMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonDexNumbersMinOrderByAggregateInput;

    @Field(() => PokemonDexNumbersSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonDexNumbersSumOrderByAggregateInput;
}
