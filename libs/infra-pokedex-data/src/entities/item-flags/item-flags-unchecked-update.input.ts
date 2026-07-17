import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput } from '../item-flag-map/item-flag-map-unchecked-update-many-without-flag-nested.input';

@InputType()
export class ItemFlagsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput;
}
