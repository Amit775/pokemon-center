import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonEvolutionCountOrderByAggregateInput } from './pokemon-evolution-count-order-by-aggregate.input';
import { PokemonEvolutionAvgOrderByAggregateInput } from './pokemon-evolution-avg-order-by-aggregate.input';
import { PokemonEvolutionMaxOrderByAggregateInput } from './pokemon-evolution-max-order-by-aggregate.input';
import { PokemonEvolutionMinOrderByAggregateInput } from './pokemon-evolution-min-order-by-aggregate.input';
import { PokemonEvolutionSumOrderByAggregateInput } from './pokemon-evolution-sum-order-by-aggregate.input';

@InputType()
export class PokemonEvolutionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolved_species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    trigger_item_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gender_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    location_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    held_item_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    time_of_day?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_type_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_happiness?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_beauty?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_affection?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    relative_physical_stats?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    party_species_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    party_type_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    trade_species_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    needs_overworld_rain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    turn_upside_down?: `${SortOrder}`;

    @Field(() => PokemonEvolutionCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonEvolutionCountOrderByAggregateInput;

    @Field(() => PokemonEvolutionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonEvolutionAvgOrderByAggregateInput;

    @Field(() => PokemonEvolutionMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonEvolutionMaxOrderByAggregateInput;

    @Field(() => PokemonEvolutionMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonEvolutionMinOrderByAggregateInput;

    @Field(() => PokemonEvolutionSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonEvolutionSumOrderByAggregateInput;
}
