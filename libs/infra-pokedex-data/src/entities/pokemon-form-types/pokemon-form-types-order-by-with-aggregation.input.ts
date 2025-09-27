import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonFormTypesCountOrderByAggregateInput } from './pokemon-form-types-count-order-by-aggregate.input';
import { PokemonFormTypesAvgOrderByAggregateInput } from './pokemon-form-types-avg-order-by-aggregate.input';
import { PokemonFormTypesMaxOrderByAggregateInput } from './pokemon-form-types-max-order-by-aggregate.input';
import { PokemonFormTypesMinOrderByAggregateInput } from './pokemon-form-types-min-order-by-aggregate.input';
import { PokemonFormTypesSumOrderByAggregateInput } from './pokemon-form-types-sum-order-by-aggregate.input';

@InputType()
export class PokemonFormTypesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonFormTypesCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonFormTypesCountOrderByAggregateInput;

    @Field(() => PokemonFormTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonFormTypesAvgOrderByAggregateInput;

    @Field(() => PokemonFormTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonFormTypesMaxOrderByAggregateInput;

    @Field(() => PokemonFormTypesMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonFormTypesMinOrderByAggregateInput;

    @Field(() => PokemonFormTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonFormTypesSumOrderByAggregateInput;
}
