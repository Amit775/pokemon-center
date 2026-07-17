import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-pokemon-nested.input';
import { PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-pokemon-nested.input';
import { PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-pokemon-nested.input';
import { PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-unchecked-update-many-without-pokemon-nested.input';
import { PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-pokemon-nested.input';
import { PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-pokemon-nested.input';
import { EncountersUncheckedUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-unchecked-update-many-without-pokemon-nested.input';

@InputType()
export class PokemonUncheckedUpdateWithoutTypesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    species_id?: IntFieldUpdateOperationsInput;

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

    @Field(() => PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    forms?: PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    abilities?: PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    moves?: PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    stats?: PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    items?: PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    gameIndices?: PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;

    @Field(() => EncountersUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
}
