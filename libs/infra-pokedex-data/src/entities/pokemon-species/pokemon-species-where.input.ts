import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { PokemonSpeciesScalarRelationFilter } from './pokemon-species-scalar-relation-filter.input';
import { PokemonSpeciesListRelationFilter } from './pokemon-species-list-relation-filter.input';
import { EvolutionChainsScalarRelationFilter } from '../evolution-chains/evolution-chains-scalar-relation-filter.input';
import { PokemonColorsScalarRelationFilter } from '../pokemon-colors/pokemon-colors-scalar-relation-filter.input';
import { PokemonShapesScalarRelationFilter } from '../pokemon-shapes/pokemon-shapes-scalar-relation-filter.input';
import { PokemonHabitatsScalarRelationFilter } from '../pokemon-habitats/pokemon-habitats-scalar-relation-filter.input';
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
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolves_from_species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    evolution_chain_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    color_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    habitat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_baby?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    has_gender_differences?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    forms_switchable?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_legendary?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_mythical?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    conquest_order?: Identity<IntFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    evolvesFrom?: Identity<PokemonSpeciesScalarRelationFilter>;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    evolvesTo?: Identity<PokemonSpeciesListRelationFilter>;

    @Field(() => EvolutionChainsScalarRelationFilter, {nullable:true})
    evolutionChain?: Identity<EvolutionChainsScalarRelationFilter>;

    @Field(() => PokemonColorsScalarRelationFilter, {nullable:true})
    color?: Identity<PokemonColorsScalarRelationFilter>;

    @Field(() => PokemonShapesScalarRelationFilter, {nullable:true})
    shape?: Identity<PokemonShapesScalarRelationFilter>;

    @Field(() => PokemonHabitatsScalarRelationFilter, {nullable:true})
    habitat?: Identity<PokemonHabitatsScalarRelationFilter>;

    @Field(() => GrowthRatesScalarRelationFilter, {nullable:true})
    growthRate?: Identity<GrowthRatesScalarRelationFilter>;

    @Field(() => PokemonListRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonListRelationFilter>;

    @Field(() => PokemonEggGroupsListRelationFilter, {nullable:true})
    eggGroups?: Identity<PokemonEggGroupsListRelationFilter>;

    @Field(() => PokemonDexNumbersListRelationFilter, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: Identity<PokemonEvolutionListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    partySpecies?: Identity<PokemonEvolutionListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    tradeSpecies?: Identity<PokemonEvolutionListRelationFilter>;
}
