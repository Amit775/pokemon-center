import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput } from '../generations/generations-update-one-required-without-pokemon-species-nested.input';
import { PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput } from './pokemon-species-update-many-without-evolves-from-nested.input';
import { EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput } from '../evolution-chains/evolution-chains-update-one-required-without-species-nested.input';
import { PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput } from '../pokemon-colors/pokemon-colors-update-one-required-without-species-nested.input';
import { PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput } from '../pokemon-shapes/pokemon-shapes-update-one-required-without-species-nested.input';
import { PokemonHabitatsUpdateOneWithoutSpeciesNestedInput } from '../pokemon-habitats/pokemon-habitats-update-one-without-species-nested.input';
import { GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput } from '../growth-rates/growth-rates-update-one-required-without-species-nested.input';
import { PokemonUpdateManyWithoutSpeciesNestedInput } from '../pokemon/pokemon-update-many-without-species-nested.input';
import { PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-species-nested.input';
import { PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolved-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-party-species-nested.input';
import { PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-trade-species-nested.input';

@InputType()
export class PokemonSpeciesUpdateWithoutEvolvesFromInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

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
    forms_switchable?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_legendary?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_mythical?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    conquest_order?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput, {nullable:true})
    evolvesTo?: PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput;

    @Field(() => EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    evolutionChain?: EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput;

    @Field(() => PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    color?: PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput;

    @Field(() => PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    shape?: PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput;

    @Field(() => PokemonHabitatsUpdateOneWithoutSpeciesNestedInput, {nullable:true})
    habitat?: PokemonHabitatsUpdateOneWithoutSpeciesNestedInput;

    @Field(() => GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    growthRate?: GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput;

    @Field(() => PokemonUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateManyWithoutSpeciesNestedInput;

    @Field(() => PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    eggGroups?: PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput;

    @Field(() => PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput, {nullable:true})
    evolution?: PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput, {nullable:true})
    partySpecies?: PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput, {nullable:true})
    tradeSpecies?: PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput;
}
