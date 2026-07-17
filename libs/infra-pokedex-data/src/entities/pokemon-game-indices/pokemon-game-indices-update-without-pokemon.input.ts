import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput } from '../versions/versions-update-one-required-without-pokemon-game-indices-nested.input';

@InputType()
export class PokemonGameIndicesUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput, {nullable:true})
    version?: VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput;
}
