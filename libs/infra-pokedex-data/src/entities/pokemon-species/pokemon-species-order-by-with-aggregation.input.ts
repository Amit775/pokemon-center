import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonSpeciesCountOrderByAggregateInput } from './pokemon-species-count-order-by-aggregate.input';
import { PokemonSpeciesAvgOrderByAggregateInput } from './pokemon-species-avg-order-by-aggregate.input';
import { PokemonSpeciesMaxOrderByAggregateInput } from './pokemon-species-max-order-by-aggregate.input';
import { PokemonSpeciesMinOrderByAggregateInput } from './pokemon-species-min-order-by-aggregate.input';
import { PokemonSpeciesSumOrderByAggregateInput } from './pokemon-species-sum-order-by-aggregate.input';

@InputType()
export class PokemonSpeciesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    evolves_from_species_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    evolution_chain_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    color_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shape_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    habitat_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    gender_rate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    capture_rate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_happiness?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_baby?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hatch_counter?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    has_gender_differences?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    forms_switchable?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_legendary?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_mythical?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    conquest_order?: SortOrderInput;

    @Field(() => PokemonSpeciesCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonSpeciesCountOrderByAggregateInput;

    @Field(() => PokemonSpeciesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonSpeciesAvgOrderByAggregateInput;

    @Field(() => PokemonSpeciesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonSpeciesMaxOrderByAggregateInput;

    @Field(() => PokemonSpeciesMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonSpeciesMinOrderByAggregateInput;

    @Field(() => PokemonSpeciesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonSpeciesSumOrderByAggregateInput;
}
