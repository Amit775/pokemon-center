import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { PokemonSpeciesNullableScalarRelationFilter } from './pokemon-species-nullable-scalar-relation-filter.input';
import { PokemonSpeciesListRelationFilter } from './pokemon-species-list-relation-filter.input';
import { EvolutionChainsScalarRelationFilter } from '../evolution-chains/evolution-chains-scalar-relation-filter.input';
import { PokemonColorsScalarRelationFilter } from '../pokemon-colors/pokemon-colors-scalar-relation-filter.input';
import { PokemonShapesScalarRelationFilter } from '../pokemon-shapes/pokemon-shapes-scalar-relation-filter.input';
import { PokemonHabitatsNullableScalarRelationFilter } from '../pokemon-habitats/pokemon-habitats-nullable-scalar-relation-filter.input';
import { GrowthRatesScalarRelationFilter } from '../growth-rates/growth-rates-scalar-relation-filter.input';
import { PokemonListRelationFilter } from '../pokemon/pokemon-list-relation-filter.input';
import { PokemonEggGroupsListRelationFilter } from '../pokemon-egg-groups/pokemon-egg-groups-list-relation-filter.input';
import { PokemonDexNumbersListRelationFilter } from '../pokemon-dex-numbers/pokemon-dex-numbers-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class PokemonSpeciesWhereInput {

    @Field(() => [PokemonSpeciesWhereInput], {nullable:true})
    AND?: Array<PokemonSpeciesWhereInput>;

    @Field(() => [PokemonSpeciesWhereInput], {nullable:true})
    OR?: Array<PokemonSpeciesWhereInput>;

    @Field(() => [PokemonSpeciesWhereInput], {nullable:true})
    NOT?: Array<PokemonSpeciesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolves_from_species_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    evolution_chain_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    color_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    habitat_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_baby?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    has_gender_differences?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    forms_switchable?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_legendary?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_mythical?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    conquest_order?: IntNullableFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;

    @Field(() => PokemonSpeciesNullableScalarRelationFilter, {nullable:true})
    evolvesFrom?: PokemonSpeciesNullableScalarRelationFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    evolvesTo?: PokemonSpeciesListRelationFilter;

    @Field(() => EvolutionChainsScalarRelationFilter, {nullable:true})
    evolutionChain?: EvolutionChainsScalarRelationFilter;

    @Field(() => PokemonColorsScalarRelationFilter, {nullable:true})
    color?: PokemonColorsScalarRelationFilter;

    @Field(() => PokemonShapesScalarRelationFilter, {nullable:true})
    shape?: PokemonShapesScalarRelationFilter;

    @Field(() => PokemonHabitatsNullableScalarRelationFilter, {nullable:true})
    habitat?: PokemonHabitatsNullableScalarRelationFilter;

    @Field(() => GrowthRatesScalarRelationFilter, {nullable:true})
    growthRate?: GrowthRatesScalarRelationFilter;

    @Field(() => PokemonListRelationFilter, {nullable:true})
    pokemon?: PokemonListRelationFilter;

    @Field(() => PokemonEggGroupsListRelationFilter, {nullable:true})
    eggGroups?: PokemonEggGroupsListRelationFilter;

    @Field(() => PokemonDexNumbersListRelationFilter, {nullable:true})
    dexNumbers?: PokemonDexNumbersListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    partySpecies?: PokemonEvolutionListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    tradeSpecies?: PokemonEvolutionListRelationFilter;
}
