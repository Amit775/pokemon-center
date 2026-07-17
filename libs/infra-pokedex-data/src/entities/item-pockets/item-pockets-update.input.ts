import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemCategoriesUpdateManyWithoutPocketNestedInput } from '../item-categories/item-categories-update-many-without-pocket-nested.input';

@InputType()
export class ItemPocketsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemCategoriesUpdateManyWithoutPocketNestedInput, {nullable:true})
    categories?: ItemCategoriesUpdateManyWithoutPocketNestedInput;
}
