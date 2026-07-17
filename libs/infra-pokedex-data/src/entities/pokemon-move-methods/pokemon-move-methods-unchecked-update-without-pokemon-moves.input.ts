import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUncheckedUpdateWithoutPokemonMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput;
}
