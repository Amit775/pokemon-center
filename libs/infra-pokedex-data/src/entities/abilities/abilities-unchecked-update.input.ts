import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput;
}
