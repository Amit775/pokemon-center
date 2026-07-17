import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    _count?: Identity<PokemonFormTypesCountOrderByAggregateInput>;

    @Field(() => PokemonFormTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonFormTypesAvgOrderByAggregateInput>;

    @Field(() => PokemonFormTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonFormTypesMaxOrderByAggregateInput>;

    @Field(() => PokemonFormTypesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonFormTypesMinOrderByAggregateInput>;

    @Field(() => PokemonFormTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonFormTypesSumOrderByAggregateInput>;
}
