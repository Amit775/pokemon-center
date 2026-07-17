import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from '../pokemon/pokemon-update-one-required-without-moves-nested.input';
import { MovesUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../moves/moves-update-one-required-without-pokemon-moves-nested.input';
import { PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-pokemon-moves-nested.input';

@InputType()
export class PokemonMovesUpdateWithoutVersionGroupInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    order?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    mastery?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => MovesUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutPokemonMovesNestedInput;

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput;
}
