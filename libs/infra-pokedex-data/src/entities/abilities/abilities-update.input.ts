import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput } from '../generations/generations-update-one-required-without-abilities-nested.input';
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput;

    @Field(() => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: PokemonAbilitiesUpdateManyWithoutAbilityNestedInput;
}
