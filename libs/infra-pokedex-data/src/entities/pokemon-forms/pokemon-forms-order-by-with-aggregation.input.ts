import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonFormsCountOrderByAggregateInput } from './pokemon-forms-count-order-by-aggregate.input';
import { PokemonFormsAvgOrderByAggregateInput } from './pokemon-forms-avg-order-by-aggregate.input';
import { PokemonFormsMaxOrderByAggregateInput } from './pokemon-forms-max-order-by-aggregate.input';
import { PokemonFormsMinOrderByAggregateInput } from './pokemon-forms-min-order-by-aggregate.input';
import { PokemonFormsSumOrderByAggregateInput } from './pokemon-forms-sum-order-by-aggregate.input';

@InputType()
export class PokemonFormsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    form_identifier?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_mega?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    form_order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => PokemonFormsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonFormsCountOrderByAggregateInput;

    @Field(() => PokemonFormsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonFormsAvgOrderByAggregateInput;

    @Field(() => PokemonFormsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonFormsMaxOrderByAggregateInput;

    @Field(() => PokemonFormsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonFormsMinOrderByAggregateInput;

    @Field(() => PokemonFormsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonFormsSumOrderByAggregateInput;
}
