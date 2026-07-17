import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-update-many-without-pokemon-form-nested.input';
import { PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-types/pokemon-form-types-unchecked-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    form_identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokemon_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    introduced_in_version_group_id?: IntFieldUpdateOperationsInput;

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

    @Field(() => PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    generations?: PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput;

    @Field(() => PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    types?: PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput;
}
