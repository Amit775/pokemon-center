import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-nested.input';
import { PokemonFormsUpdateManyWithoutPokemonNestedInput } from '../pokemon-forms/pokemon-forms-update-many-without-pokemon-nested.input';
import { PokemonAbilitiesUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-pokemon-nested.input';
import { PokemonMovesUpdateManyWithoutPokemonNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-pokemon-nested.input';
import { PokemonStatsUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-pokemon-nested.input';
import { PokemonTypesUpdateManyWithoutPokemonNestedInput } from '../pokemon-types/pokemon-types-update-many-without-pokemon-nested.input';
import { PokemonGameIndicesUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-pokemon-nested.input';
import { EncountersUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-update-many-without-pokemon-nested.input';

@InputType()
export class PokemonUpdateWithoutItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    weight?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_experience?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    order?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_default?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;

    @Field(() => PokemonFormsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    forms?: PokemonFormsUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonAbilitiesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    abilities?: PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonMovesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    moves?: PokemonMovesUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonStatsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    stats?: PokemonStatsUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonTypesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    types?: PokemonTypesUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonGameIndicesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    gameIndices?: PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;

    @Field(() => EncountersUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: EncountersUpdateManyWithoutPokemonNestedInput;
}
