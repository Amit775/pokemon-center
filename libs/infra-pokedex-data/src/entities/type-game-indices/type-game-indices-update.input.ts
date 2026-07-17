import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutGameIndicesNestedInput } from '../types/types-update-one-required-without-game-indices-nested.input';
import { GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from '../generations/generations-update-one-required-without-type-game-indices-nested.input';

@InputType()
export class TypeGameIndicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutGameIndicesNestedInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput;
}
