import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput } from './pokemon-species-unchecked-update-many-without-evolves-from-nested.input';
import { PokemonUncheckedUpdateManyWithoutSpeciesNestedInput } from '../pokemon/pokemon-unchecked-update-many-without-species-nested.input';
import { PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-evolved-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-party-species-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-trade-species-nested.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateWithoutDexNumbersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    evolves_from_species_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    evolution_chain_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    color_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    shape_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    habitat_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gender_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    capture_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_happiness?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_baby?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    hatch_counter?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    has_gender_differences?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    growth_rate_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    forms_switchable?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_legendary?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_mythical?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    conquest_order?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput, {nullable:true})
    evolvesTo?: PokemonSpeciesUncheckedUpdateManyWithoutEvolvesFromNestedInput;

    @Field(() => PokemonUncheckedUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    pokemon?: PokemonUncheckedUpdateManyWithoutSpeciesNestedInput;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    eggGroups?: PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput;
}
