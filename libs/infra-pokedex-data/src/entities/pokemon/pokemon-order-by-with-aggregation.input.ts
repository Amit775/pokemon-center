import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonCountOrderByAggregateInput } from './pokemon-count-order-by-aggregate.input';
import { PokemonAvgOrderByAggregateInput } from './pokemon-avg-order-by-aggregate.input';
import { PokemonMaxOrderByAggregateInput } from './pokemon-max-order-by-aggregate.input';
import { PokemonMinOrderByAggregateInput } from './pokemon-min-order-by-aggregate.input';
import { PokemonSumOrderByAggregateInput } from './pokemon-sum-order-by-aggregate.input';

@InputType()
export class PokemonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    height?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weight?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_experience?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    order?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => PokemonCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonCountOrderByAggregateInput;

    @Field(() => PokemonAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonAvgOrderByAggregateInput;

    @Field(() => PokemonMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonMaxOrderByAggregateInput;

    @Field(() => PokemonMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonMinOrderByAggregateInput;

    @Field(() => PokemonSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonSumOrderByAggregateInput;
}
