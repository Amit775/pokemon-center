import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutGameIndicesNestedInput } from '../pokemon/pokemon-update-one-required-without-game-indices-nested.input';

@InputType()
export class PokemonGameIndicesUpdateWithoutVersionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutGameIndicesNestedInput;
}
