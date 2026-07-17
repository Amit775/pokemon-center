import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutGameIndicesNestedInput } from '../types/types-update-one-required-without-game-indices-nested.input';

@InputType()
export class TypeGameIndicesUpdateWithoutGenerationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutGameIndicesNestedInput;
}
