import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput } from '../item-categories/item-categories-unchecked-update-many-without-pocket-nested.input';

@InputType()
export class ItemPocketsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput, {nullable:true})
    categories?: ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput;
}
