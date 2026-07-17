import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemsUpdateManyWithoutFlingEffectNestedInput } from '../items/items-update-many-without-fling-effect-nested.input';

@InputType()
export class ItemFlingEffectsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateManyWithoutFlingEffectNestedInput, {nullable:true})
    items?: ItemsUpdateManyWithoutFlingEffectNestedInput;
}
