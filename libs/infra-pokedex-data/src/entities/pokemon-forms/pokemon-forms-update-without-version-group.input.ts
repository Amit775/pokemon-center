import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutFormsNestedInput } from '../pokemon/pokemon-update-one-required-without-forms-nested.input';
import { PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-generations/pokemon-form-generations-update-many-without-pokemon-form-nested.input';
import { PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-types/pokemon-form-types-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUpdateWithoutVersionGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_default?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_mega?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    form_order?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutFormsNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutFormsNestedInput;

    @Field(() => PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    generations?: PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput;

    @Field(() => PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    types?: PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput;
}
