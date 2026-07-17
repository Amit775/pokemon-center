import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutGameIndicesNestedInput } from '../items/items-update-one-required-without-game-indices-nested.input';
import { GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput } from '../generations/generations-update-one-required-without-item-game-indices-nested.input';

@InputType()
export class ItemGameIndicesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutGameIndicesNestedInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput;
}
