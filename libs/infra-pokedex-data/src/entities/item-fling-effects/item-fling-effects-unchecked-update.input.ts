import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput } from '../items/items-unchecked-update-many-without-fling-effect-nested.input';

@InputType()
export class ItemFlingEffectsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput, {nullable:true})
    items?: ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput;
}
