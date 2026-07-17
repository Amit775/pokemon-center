import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUpdateWithoutPokemonMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput;
}
