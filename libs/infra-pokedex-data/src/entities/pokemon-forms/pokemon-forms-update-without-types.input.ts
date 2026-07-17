import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutFormsNestedInput } from '../pokemon/pokemon-update-one-required-without-forms-nested.input';
import { VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokemon-forms-nested.input';
import { PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-generations/pokemon-form-generations-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUpdateWithoutTypesInput {

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

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput;

    @Field(() => PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    generations?: PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput;
}
