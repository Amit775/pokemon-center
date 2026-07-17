import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    trigger_item_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_level?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    gender_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    location_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    held_item_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    time_of_day?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    known_move_type_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_happiness?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_beauty?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    minimum_affection?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    relative_physical_stats?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    party_species_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    party_type_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    trade_species_id?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    needs_overworld_rain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    turn_upside_down?: `${SortOrder}`;

    @Field(() => PokemonEvolutionCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonEvolutionCountOrderByAggregateInput>;

    @Field(() => PokemonEvolutionAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonEvolutionAvgOrderByAggregateInput>;

    @Field(() => PokemonEvolutionMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonEvolutionMaxOrderByAggregateInput>;

    @Field(() => PokemonEvolutionMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonEvolutionMinOrderByAggregateInput>;

    @Field(() => PokemonEvolutionSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonEvolutionSumOrderByAggregateInput>;
}
