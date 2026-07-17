import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from '../generations/generations-update-one-required-without-type-game-indices-nested.input';

@InputType()
export class TypeGameIndicesUpdateWithoutTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput;
}
