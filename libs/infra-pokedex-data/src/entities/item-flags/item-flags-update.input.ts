import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemFlagMapUpdateManyWithoutFlagNestedInput } from '../item-flag-map/item-flag-map-update-many-without-flag-nested.input';

@InputType()
export class ItemFlagsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemFlagMapUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: ItemFlagMapUpdateManyWithoutFlagNestedInput;
}
