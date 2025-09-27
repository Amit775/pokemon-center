import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { PokemonSpeciesOrderByRelationAggregateInput } from './pokemon-species-order-by-relation-aggregate.input';
import { EvolutionChainsOrderByWithRelationInput } from '../evolution-chains/evolution-chains-order-by-with-relation.input';
import { PokemonColorsOrderByWithRelationInput } from '../pokemon-colors/pokemon-colors-order-by-with-relation.input';
import { PokemonShapesOrderByWithRelationInput } from '../pokemon-shapes/pokemon-shapes-order-by-with-relation.input';
import { PokemonHabitatsOrderByWithRelationInput } from '../pokemon-habitats/pokemon-habitats-order-by-with-relation.input';
import { GrowthRatesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';
import { PokemonOrderByRelationAggregateInput } from '../pokemon/pokemon-order-by-relation-aggregate.input';
import { PokemonEggGroupsOrderByRelationAggregateInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-relation-aggregate.input';
import { PokemonDexNumbersOrderByRelationAggregateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-relation-aggregate.input';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class PokemonSpeciesOrderByWithRelationInput {

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

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: GenerationsOrderByWithRelationInput;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    evolvesFrom?: PokemonSpeciesOrderByWithRelationInput;

    @Field(() => PokemonSpeciesOrderByRelationAggregateInput, {nullable:true})
    evolvesTo?: PokemonSpeciesOrderByRelationAggregateInput;

    @Field(() => EvolutionChainsOrderByWithRelationInput, {nullable:true})
    evolutionChain?: EvolutionChainsOrderByWithRelationInput;

    @Field(() => PokemonColorsOrderByWithRelationInput, {nullable:true})
    color?: PokemonColorsOrderByWithRelationInput;

    @Field(() => PokemonShapesOrderByWithRelationInput, {nullable:true})
    shape?: PokemonShapesOrderByWithRelationInput;

    @Field(() => PokemonHabitatsOrderByWithRelationInput, {nullable:true})
    habitat?: PokemonHabitatsOrderByWithRelationInput;

    @Field(() => GrowthRatesOrderByWithRelationInput, {nullable:true})
    growthRate?: GrowthRatesOrderByWithRelationInput;

    @Field(() => PokemonOrderByRelationAggregateInput, {nullable:true})
    pokemon?: PokemonOrderByRelationAggregateInput;

    @Field(() => PokemonEggGroupsOrderByRelationAggregateInput, {nullable:true})
    eggGroups?: PokemonEggGroupsOrderByRelationAggregateInput;

    @Field(() => PokemonDexNumbersOrderByRelationAggregateInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    evolution?: PokemonEvolutionOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    partySpecies?: PokemonEvolutionOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    tradeSpecies?: PokemonEvolutionOrderByRelationAggregateInput;
}
