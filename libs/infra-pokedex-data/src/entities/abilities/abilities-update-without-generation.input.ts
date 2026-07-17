import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUpdateWithoutGenerationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_main_series?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: PokemonAbilitiesUpdateManyWithoutAbilityNestedInput;
}
