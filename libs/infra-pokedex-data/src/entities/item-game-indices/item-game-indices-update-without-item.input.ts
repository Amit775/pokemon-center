import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput } from '../generations/generations-update-one-required-without-item-game-indices-nested.input';

@InputType()
export class ItemGameIndicesUpdateWithoutItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput;
}
