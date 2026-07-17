import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from '../item-pockets/item-pockets-update-one-required-without-categories-nested.input';
import { ItemsUpdateManyWithoutCategoryNestedInput } from '../items/items-update-many-without-category-nested.input';

@InputType()
export class ItemCategoriesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    pocket?: ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => ItemsUpdateManyWithoutCategoryNestedInput, {nullable:true})
    items?: ItemsUpdateManyWithoutCategoryNestedInput;
}
