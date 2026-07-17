import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonMovesUpdateManyWithoutMoveMethodNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-move-method-nested.input';
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => PokemonMovesUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    pokemonMoves?: PokemonMovesUpdateManyWithoutMoveMethodNestedInput;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    versionGroups?: VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput;
}
